import React from "react";
import { Navbar, Footer, Container, Section } from "./components/Layout";

type MemberRole = {
  file: string;
  name: string;
  position?: string;
};

type YearBucket = {
  images: Map<string, string>;
  lookup: Map<string, string>;
  roles?: MemberRole[];
};

type BoardMember = {
  id: string;
  fileName: string;
  name: string;
  position?: string;
  imageSrc?: string;
};

type BoardYear = {
  year: string;
  displayYear: string;
  members: BoardMember[];
};

const normalizeFileName = (value: string) => value.trim().toLowerCase();

const extractYearAndFile = (path: string) => {
  const normalized = path.replace(/^\.\/+/, "");
  const segments = normalized.split("/");
  if (segments.length < 5) {
    return null;
  }
  const year = segments[3];
  const file = segments.slice(4).join("/");
  if (!year || !file) {
    return null;
  }
  return { year, file };
};

const formatDisplayYear = (year: string) => {
  const start = Number(year);
  if (!Number.isFinite(start)) {
    return year;
  }
  return `${start}-${start + 1}`;
};

const titleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");

const formatNameFromFile = (file: string) => {
  const withoutExt = file.replace(/\.[^./]+$/, "");
  const spaced = withoutExt
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");
  const cleaned = spaced.replace(/\s+/g, " ").trim();
  if (!cleaned) {
    return "Board Member";
  }
  return titleCase(cleaned);
};

const buildBoardData = (): BoardYear[] => {
  const imageModules = import.meta.glob(
    "./assets/photos/board/*/*.{jpg,jpeg,png,webp}",
    { eager: true, import: "default" }
  ) as Record<string, string>;

  const jsonModules = import.meta.glob(
    "./assets/photos/board/*/members.json",
    { eager: true, import: "default" }
  ) as Record<string, { roles?: MemberRole[] }>;

  const buckets = new Map<string, YearBucket>();

  const ensureBucket = (year: string) => {
    let bucket = buckets.get(year);
    if (!bucket) {
      bucket = { images: new Map(), lookup: new Map() };
      buckets.set(year, bucket);
    }
    return bucket;
  };

  Object.entries(imageModules).forEach(([path, src]) => {
    const parsed = extractYearAndFile(path);
    if (!parsed) {
      return;
    }
    const { year, file } = parsed;
    const bucket = ensureBucket(year);
    bucket.images.set(file, src);
    bucket.lookup.set(normalizeFileName(file), file);
  });

  Object.entries(jsonModules).forEach(([path, payload]) => {
    const parsed = extractYearAndFile(path);
    if (!parsed) {
      return;
    }
    const { year } = parsed;
    const bucket = ensureBucket(year);
    if (Array.isArray(payload?.roles)) {
      bucket.roles = payload.roles;
    }
  });

  return Array.from(buckets.entries())
    .sort(([yearA], [yearB]) => {
      const numA = Number(yearA);
      const numB = Number(yearB);
      if (Number.isFinite(numA) && Number.isFinite(numB)) {
        return numB - numA;
      }
      return yearA.localeCompare(yearB) * -1;
    })
    .map(([year, bucket]) => {
      const used = new Set<string>();
      const members: BoardMember[] = [];

      if (bucket.roles?.length) {
        bucket.roles.forEach((role, index) => {
          const lookupKey = normalizeFileName(role.file);
          const matchedFile = bucket.lookup.get(lookupKey);
          const imageSrc = matchedFile ? bucket.images.get(matchedFile) : undefined;
          if (matchedFile) {
            used.add(matchedFile);
          }
          members.push({
            id: `${year}-role-${index}-${role.file}`,
            fileName: matchedFile ?? role.file,
            name: role.name || formatNameFromFile(matchedFile ?? role.file),
            position: role.position,
            imageSrc,
          });
        });
      }

      const leftovers = Array.from(bucket.images.entries())
        .filter(([file]) => !used.has(file))
        .sort(([fileA], [fileB]) => fileA.localeCompare(fileB));

      leftovers.forEach(([file, src], index) => {
        members.push({
          id: `${year}-extra-${index}-${file}`,
          fileName: file,
          name: formatNameFromFile(file),
          imageSrc: src,
        });
      });

      return {
        year,
        displayYear: formatDisplayYear(year),
        members,
      };
    })
    .filter((entry) => entry.members.length > 0);
};

const Board: React.FC = () => {
  const boardYears = React.useMemo(() => buildBoardData(), []);
  const hasContent = boardYears.length > 0;

  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-black via-stanford/70 to-stanford/80 text-white">
        <Navbar />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-gray-100/80" />
        <div id="board" className="relative pt-32 pb-20">
          <Container className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">
              Leadership
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              Meet the Board
            </h1>
            <p className="mt-6 max-w-3xl text-base text-white/80 sm:text-lg">
              Explore the teams that keep Stanford Women in Electrical Engineering
              thriving. 
            </p>
            {boardYears.length > 1 && (
              <div className="mt-10 flex flex-wrap gap-2">
                {boardYears.map((year) => (
                  <a
                    key={year.year}
                    href={`#board-${year.year}`}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
                  >
                    {year.displayYear}
                  </a>
                ))}
              </div>
            )}
          </Container>
        </div>
      </div>

      <main className="relative z-10 space-y-0">
        {boardYears.map((yearEntry, index) => (
          <Section
            key={yearEntry.year}
            id={`board-${yearEntry.year}`}
            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
          >
            <Container>
              <div className="flex flex-col gap-4 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-stanford">
                    Board {yearEntry.displayYear}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                    Academic Year {yearEntry.displayYear}
                  </h2>
                </div>
                <span className="rounded-full border border-gray-200 bg-white px-4 py-1 text-sm font-medium text-gray-600 shadow-sm">
                  {yearEntry.members.length} members
                </span>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {yearEntry.members.map((member) => (
                  <article
                    key={member.id}
                    className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200">
                      {member.imageSrc ? (
                        <img
                          src={member.imageSrc}
                          alt={member.name}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stanford/40 to-gray-300 text-center text-sm font-semibold text-white">
                          Photo coming soon
                        </div>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5 text-center">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      {member.position && (
                        <p className="mt-2 text-sm text-gray-600">{member.position}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </Container>
          </Section>
        ))}

        {!hasContent && (
          <Section className="bg-white">
            <Container className="max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Board photos coming soon
              </h2>
              <p className="mt-4 text-base text-gray-600">
                Add photos to `src/assets/photos/board/YYYY` and include a matching
                `members.json` file to showcase your board here instantly.
              </p>
            </Container>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Board;
