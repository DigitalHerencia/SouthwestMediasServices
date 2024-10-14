function forceDownload(blobUrl: string, filename: string) {
  let a: any = document.createElement("a");
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function downloadPhoto(url: string, filename: string) {
    fetch(url, {
        headers: new Headers({
            Origin: location.origin,
        }),
        mode: "cors",
    })
        .then((response) => response.blob())
        .then((blob) => {
            let blobUrl = window.URL.createObjectURL(blob)
            if (filename) {
                forceDownload(blobUrl, filename)
            } else {
                // handle the case where filename is undefined
                console.error("Filename is undefined")
            }
        })
        .catch((e) => console.error(e))
}