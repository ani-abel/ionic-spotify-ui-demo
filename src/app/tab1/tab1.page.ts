import { Component } from '@angular/core';
import { Router } from "@angular/router";
import recentlyPlayed from "../../assets/mockdata/recentlyPlayed.json";
import heavyRotation from "../../assets/mockdata/heavyRotation.json";
import jumpBackIn from "../../assets/mockdata/jumpBackIn.json";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data = [
    {
      title: "Recently Played",
      albums: recentlyPlayed,
    },
    {
      title: "Heavy Rotation",
      albums: heavyRotation
    },
    {
      title: "Jump Back In",
      albums: jumpBackIn,
    },
  ];

  sliderOptions = {
    slidesPerView: 2.4,
    spaceBetween: 20,
    slidesOffsetBefore: 20,
    freeMode: true,
  };

  constructor(private readonly router: Router) {}

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  // Helper function for image names
  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
