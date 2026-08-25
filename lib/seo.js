export function createMetadata({ title, description, image }) {
  return {
    title,
    description,

    openGraph: {
      title,
      description,

      images: image
        ? [
            {
              url: image.url,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      images: image ? [image.url] : [],
    },
  };
}
