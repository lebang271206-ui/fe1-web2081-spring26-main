import { Component } from '@angular/core';

@Component({
  selector: 'app-stories',
  imports: [],
  templateUrl: './stories.html',
  styleUrl: './stories.css',
})
export class Stories {
  stories = [
    {
      title: 'One Piece',
      author: 'Oda',
      views: 100000,
      year: 1997,
      genre: "Phiêu lưu",
      image: "https://wallpapers.com/images/featured-full/one-piece-pictures-bjm9tdff9yzguoup.jpg",
    },
    {
      title: 'Naruto',
      author: 'Kishimoto',
      views: 90000,
      year: 1999,
      genre: "Hành động",
      image: "https://easydrawingguides.com/wp-content/uploads/2017/05/how-to-draw-naruto-featured-image-1200.png",
    },
    {
      title: 'Doraemon',
      author: 'Fujiko F Fujio',
      views: 70000,
      year: 1969,
      genre: "Hài kịch",
      image: "https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/300786145_451257823693689_6259289295520386259_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHLynwMHjqYKSjPyP7t9AeX8WlMGkt_s4rxaUwaS3-zinpgzItmnMZlVpT1jAgEXtimoFQJKcprDWXSU8dkXy0X&_nc_ohc=ec2bKZq1dTIQ7kNvwFxDtaT&_nc_oc=AdmyP9xwZFEvfA5qQdQa8N5iR6Q6aU6i9oOEIi97_u5jv65Lg5Eev91sW7kclWRIOOg&_nc_zt=23&_nc_ht=scontent.fhan12-1.fna&_nc_gid=c-eDrgejWaERLL4du0Z6Rg&_nc_ss=8&oh=00_Afzthk9NhQW97wXoTQIiusY6jQ7Fu3p3kFd4UfTJmanjXw&oe=69BAB82A",
    },
    {
      title: 'Hunter x Hunter',
      author: 'Togashi',
      views: 120000,
      year: 1998,
      genre: "Phiêu lưu",
      image: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GY3VKX1MR-backdrop_wide",
    },
  ];
  handleClick() {
    alert("Bạn đã click vào truyện");
  }
}