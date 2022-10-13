function extractDomain(string) {
  const domain = string
    .replace('www.', '')
    .split('.')
    .slice(0, 1)
    .join()
    .split('://');
  return domain.length === 1 ? domain[0] : domain[1];
}
