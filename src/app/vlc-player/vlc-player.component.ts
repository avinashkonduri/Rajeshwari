import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-vlc-player',
  templateUrl: './vlc-player.component.html',
  styleUrls: ['./vlc-player.component.css']
})
export class VlcPlayerComponent implements AfterViewInit {


  public constructor() { }

  Songs = [{
    song_title:'1',
    audio_file:'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-free-to-use-sounds/ftus_jungle_rainforest_daytime_birds_singing_close_up_distant_traffic_vietnam_705.mp3?_=1'
  },
  {
    song_title:'2',
    audio_file:'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-free-to-use-sounds/ftus_jungle_rainforest_daytime_birds_singing_close_up_distant_traffic_vietnam_705.mp3?_=1'
  },
  {
    song_title:'3',
    audio_file:'https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-free-to-use-sounds/ftus_jungle_rainforest_daytime_birds_singing_close_up_distant_traffic_vietnam_705.mp3?_=1'
  }]

    @ViewChildren('audio')
  audioElms: ElementRef[] = [];

    ngAfterViewInit () {
      console.log(this.audioElms)
    }

    onPaly(elm:HTMLAudioElement) {
      this.audioElms.forEach(({nativeElement:e})=>{
       if (e !== elm) {
         e.pause();
       }
      })
    }
}
