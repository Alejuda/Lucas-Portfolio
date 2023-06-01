export async function getPhotoPath(photoFilename) {
  const { default: photoPath } = await import(`${photoFilename}`);
  return photoPath;
}