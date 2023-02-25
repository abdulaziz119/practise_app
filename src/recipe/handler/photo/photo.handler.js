import path from "path";

export function photoCreateHandler(request, response) {
  try {
    const { files } = request.files;
    const sasa = files.mimetype;
    const imageTypes = ["image/png", "image/jpeg"];
    if (!imageTypes.includes(sasa)) {
      throw new Error("No image type entered");
    }
    console.log(sasa);
    console.log(files);
    const fileName = new Date().getTime() + ".jpeg";
    const filePath = path.resolve(process.cwd(), "uploads", "images", fileName);
    files.mv(filePath);
    response.json({
      message: "The file has been succefully uploaded!",
      status: 200,
      data: fileName,
    });
  } catch (error) {
    response.json({
      status: 400,
      message: error.message,
    });
  }
}
