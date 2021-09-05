export const ellipsisFilePath = (path: string, truncateLength: number): string => {
  if (path?.length > truncateLength) {
    const visiblePart = Math.round(truncateLength / 2);

    /**
     * `$1` and `$3` stand for the start and the end of the `path`.
     * The length of these two are based on `visiblePart`.
     *
     * `$4` stand for the `path`'s file extension.
     */
    const shortenFilePath = path?.replace(
      new RegExp(`^(.{${visiblePart}})(.+)(.{${visiblePart}})(..{3,4})$`),
      `$1...$3$4`
    );

    return shortenFilePath;
  }

  return path;
};
