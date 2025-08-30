const PDFMerger = require('pdf-merger-js').default;

const mergepdf = async (p1, p2) => {
  const merger = new PDFMerger();   // <-- fresh merger each call
  await merger.add(p1);
  await merger.add(p2);

  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`);
  return d;
};

module.exports = { mergepdf };
