export const ConvertFileToBase64Format = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // Base64 jako string
    reader.onerror = (error) => reject(error);
  });
};
