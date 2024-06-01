export const formatDate = (date) => {
  const hours = new Date(date).getHours();
  const min = new Date(date).getMinutes();
  return `${hours < 10 ? "0" + hours : hours}:${min < 10 ? "0" + min : min}`;
};

export const downloadMedia = (e, originalImage) => {
  e.preventDefault();
  try {
    fetch(originalImage)
      .then((res) => res.blob)
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.style.display = "none";
        const nameSplit = originalImage.split("/");
        const duplicateName = nameSplit.pop();
        a.download = "" + duplicateName + "";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.log("Error while downloading image", error));
  } catch (error) {}
};
