const images = [
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

function handleLoad(){
  for(const url of images){
    const pic = document.createElement("img");
    pic.src = url;
    pic.height = "200";
    pic.width = "200";
    pic.style.padding = "5px"
    document.getElementById("container").appendChild(pic);
  };
};