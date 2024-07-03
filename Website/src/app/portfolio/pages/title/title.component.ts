import { AfterViewInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Star } from './star';
import { Line } from './line';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  private polaris: Star;
  private stars: {[index: string]: Star} = {};
  private extraStars: Star[] = [];
  lines: Line[] = [];
  data = [
    'Polaris,300,300,5,UMi2',
    'UMi2,309,304,3,UMi3',
    'UMi3,321,304,3,UMi4',
    'UMi4,333,298,3,UMi5',
    'UMi5,338,303,2,UMi6',
    'UMi6,348,292,4,UMi7',
    'UMi7,340,288,4,UMi4',
    'Dra1,322,250,3,Dra2',
    'Dra2,334,258,3,Dra3',
    'Dra3,360,267,3,Dra4',
    'Dra4,383,287,3,Dra5',
    'Dra5,385,301,2,Dra6',
    'Dra6,377,308,4,Dra7',
    'Dra7,363,319,3,Dra8',
    'Dra8,352,323,2,Dra9',
    'Dra9,338,326,3,Dra10',
    'Dra10,330,333,2,Dra11',
    'Dra11,329,344,3,Dra12',
    'Dra12,330,351,2,Dra13',
    'Dra13,361,356,2,Dra14',
    'Dra14,369,349,2,Dra15',
    'Dra15,380,342,3,Dra16',
    'Dra16,393,351,5,Dra17',
    'Dra17,396,339,4,Dra18',
    'Dra18,388,337,2,Dra15',
    'Dra19,343,350,2,Dra15',
    'Dra20,340,344,3,Dra19',
    'Dra21,341,329,2,Dra20',
    'Dra22,341,329,2,Dra8',
    'Cep1,314,373,4,Cep2',
    'Cep2,297,386,3,Cep3',
    'Cep3,287,362,3,Cep4',
    'Cep4,308,351,3,Cep1',
    'Cep5,308,351,3,Cep6',
    'Cep6,287,330,3,Cep3',
    'Cas1,257,371,4,Cas2',
    'Cas2,243,370,4,Cas3',
    'Cas3,247,357,4,Cas4',
    'Cas4,239,350,3,Cas5',
    'Cas5,241,337,3,',
    'Lyr1,413,391,6,Lyr2',
    'Lyr2,412,397,2,Lyr3',
    'Lyr3,410,403,2,Lyr4',
    'Lyr4,418,415,3,Lyr5',
    'Lyr5,421,409,3,Lyr2',
    'Cyg1,343,416,5,Cyg2',
    'Cyg2,359,427,4,Cyg3',
    'Cyg3,382,434,3,Cyg4',
    'Cyg4,401,441,2,Cyg5',
    'Cyg5,411,443,3,',
    'Cyg6,352,452,4,Cyg2',
    'Cyg7,370,403,4,Cyg2',
    'Her1,411,351,3,Her2',
    'Her2,431,372,3,Her3',
    'Her3,440,353,3,Her4',
    'Her4,443,348,4,Her5',
    'Her5,466,344,3,Her6',
    'Her6,466,329,4,Her7',
    'Her7,442,326,3,Her4',
    'Her8,432,319,2,Her7',
    'Her9,421,310,3,Her8',
    'Her10,426,304,3,Her9',
    'Her11,433,295,2,Her10',
    'Her12,466,344,3,Her13',
    'Her13,483,361,4,Her14',
    'Her14,522,374,4,Her15',
    'Her15,504,326,4,Her6',
    'Her16,504,326,4,Her17',
    'Her17,513,319,3,Her18',
    'Her18,534,325,2,Her19',
    'Her19,544,334,2,',
    'Her20,483,361,4,Her21',
    'Her21,474,372,2,Her22',
    'Her22,464,381,3,Her23',
    'Her23,455,386,3,Her24',
    'Her24,453,393,3,',
    'Crb1,468,280,3,Crb2',
    'Crb2,476,275,3,Crb3',
    'Crb3,485,279,4,Crb4',
    'Crb4,487,285,3,Crb5',
    'Crb5,488,291,2,Crb6',
    'Crb6,485,297,2,Crb7',
    'Crb7,475,300,2,',
    'CVn1,401,195,4,CVn2',
    'CVn2,385,194,3,',
    'Com1,407,156,2,Com2',
    'Com2,435,178,2,Com3',
    'Com3,462,150,2,',
    'Ser1,594,426,4,Ser2',
    'Ser2,556,429,3,Ser3',
    'Ser3,550,420,4,Ser4',
    'Ser4,522,396,5,Ser5',
    'Ser5,548,362,3,Ser6',
    'Ser6,558,338,3,Ser7',
    'Ser7,692,282,3,Ser8',
    'Ser8,578,288,3,Ser9',
    'Ser9,568,280,4,Ser10',
    'Ser10,549,271,3,Ser11',
    'Ser11,529,285,3,Ser12',
    'Ser12,519,288,3,Ser13',
    'Ser13,529,295,3,Ser11',
    'Ser14,575,207,3,Ser15',
    'Ser15,533,155,2,Ser16',
    'Ser16,542,120,2,Ser17',
    'Ser17,495,95,3,Ser18',
    'Ser18,499,57,3,Ser19',
    'Ser19,434,42,3,',
    'Ser20,476,126,3,Ser17',
    'Ser21,502,493,2,Ser22',
    'Ser22,575,480,2,',
    'Sge1,526,537,2,Sge2',
    'Sge2,479,521,3,Sge3',
    'Sge3,464,470,3,Sge4',
    'Sge4,465,462,2,',
    'Sge5,431,581,3,Sge6',
    'Sge6,457,549,3,Sge2',
    'Sge7,439,517,5,Sge2',
    'Sge8,441,529,3,Sge7',
    'Sge9,439,508,3,Sge7',
    'Del1,393,529,3,Del2',
    'Del2,384,517,3,Del3',
    'Del3,380,513,2,Del4',
    'Del4,373,514,2,Del5',
    'Del5,378,517,2,Del2',
    'Vul1,392,457,2,Vul2',
    'Vul2,420,452,2,',
    'Vul3,409,483,3,Vul4',
    'Vul4,420,481,3,Vul5',
    'Vul5,427,478,2,',
    'Vul6,427,481,2,Vul4',
    'Equ1,355,568,3,Equ2',
    'Equ2,352,547,2,Equ3',
    'Equ3,356,545,2,',
    'CMi1,139,97,3,CMi2',
    'CMi2,141,77,5,',
    'Tri1,153,393,3,Tri2',
    'Tri2,162,374,3,Tri3',
    'Tri3,157,370,3,',
    'Ari1,127,357,3,Ari2',
    'Ari2,128,395,4,Ari3',
    'Ari3,125,409,3,Ari4',
    'Ari4,120,413,2,',
    'Psc1,173,417,2,Psc2',
    'Psc2,161,419,2,Psc3',
    'Psc3,157,429,2,Psc4',
    'Psc4,119,440,2,Psc5',
    'Psc5,53,442,2,Psc6',
    'Psc6,78,457,2,Psc7',
    'Psc7,105,476,2,Psc8',
    'Psc8,115,484,2,Psc9',
    'Psc9,126,496,2,Psc10',
    'Psc10,170,532,2,Psc11',
    'Psc11,188,547,2,Psc12',
    'Psc12,178,563,2,Psc13',
    'Psc13,194,572,2,Psc14',
    'Psc14,209,568,3,Psc15',
    'Psc15,202,550,2,Psc11',
    'Psc16,225,570,2,Psc14',
    'Unk1,256,595,2,Unk2',
    'Unk2,265,597,3,Unk3',
    'Unk3,282,609,3,Unk4',
    'Unk4,295,600,3,Unk5',
    'Unk5,304,608,3,',
    'Unk6,270,590,2,Unk2',
    'Unk7,258,603,2,Unk2',
    'Peg1,320,552,4,Peg2',
    'Peg2,290,569,3,Peg3',
    'Peg3,257,545,3,Peg4',
    'Peg4,253,539,2,Peg5',
    'Peg5,238,521,4,Peg6',
    'Peg6,176,493,4,Peg7',
    'Peg7,208,451,4,Peg8',
    'Peg8,252,474,4,Peg5',
    'Peg9,314,489,2,Peg10',
    'Peg10,296,490,2,Peg11',
    'Peg11,262,493,2,Peg12',
    'Peg12,260,489,3,Peg8',
    'Peg13,293,463,2,Peg14',
    'Peg14,269,470,3,Peg8',
    'Peg15,185,365,4,Peg16',
    'Peg16,188,405,4,Peg17',
    'Peg17,192,432,3,Peg7',
    'Peg18,209,367,3,Peg19',
    'Peg19,200,405,3,Peg20',
    'Peg20,200,425,2,Peg7',
    'And1,266,429,3,And2',
    'And2,252,410,2,Peg19',
    'Lac1,291,447,2,Lac2',
    'Lac2,293,441,2,Lac3',
    'Lac3,284,430,2,Lac4',
    'Lac4,279,425,2,Lac5',
    'Lac5,286,416,2,Lac6',
    'Lac6,290,420,2,Lac3',
    'Lac7,291,403,2,Lac8',
    'Lac8,286,408,2,Lac9',
    'Lac9,286,416,2,Lac10',
    'Lac10,290,411,2,Lac7',
    'Unkb1,17,419,2,Unkb2',
    'Unkb2,23,405,2,Unkb3',
    'Unkb3,34,395,3,Unkb4',
    'Unkb4,63,403,2,Unkb5',
    'Unkb5,63,383,2,Unkb6',
    'Unkb6,53,369,2,Unkb7',
    'Unkb7,31,372,4,Unkb3',
    'Unkc1,309,0,3,Unkc2',
    'Unkc2,365,3,3,',
    'Unkc3,361,-4,3,Unkc4',
    'Unkc4,242,19,2,Unkc5',
    'Unkc5,224,41,3,Unkc6',
    'Unkc6,216,43,2,Unkc7',
    'Unkc7,215,46,3,Unkc8',
    'Unkc8,203,47,2,Unkc9',
    'Unkc9,201,36,2,Unkc10',
    'Unkc10,206,34,2,Unkc6',
    'Unkd1,75,140,2,Unkd2',
    'Unkd2,86,110,2,Unkd3',
    'Unkd3,98,78,2,Unkd4',
    'Unkd4,104,61,2,',
    'Cnc1,244,132,3,Cnc2',
    'Cnc2,232,107,2,Cnc3',
    'Cnc3,229,95,2,',
    'Cnc4,188,71,3,Cnc3',
    'Cnc5,232,65,2,Cnc3',
    'Leo1,288,105,3,Leo2',
    'Leo2,294,112,3,Leo3',
    'Leo3,314,104,3,Leo4',
    'Leo4,318,90,4,Leo5',
    'Leo5,366,102,4,Leo6',
    'Leo6,406,93,4,Leo7',
    'Leo7,372,83,3,Leo5',
    'Leo8,372,83,3,Leo9',
    'Leo9,308,57,5,Leo10',
    'Leo10,306,77,3,Leo4',
    'Tau1,30,297,3,Tau2',
    'Tau2,48,341,3,',
    'Tau3,51,338,3,Tau4',
    'Tau4,60,301,3,Tau5',
    'Tau5,74,282,3,Tau6',
    'Tau6,76,273,3,Tau7',
    'Tau7,79,267,5,Tau8',
    'Tau8,112,217,3,',
    'Aur1,74,282,3,Aur2',
    'Aur2,81,280,3,Aur3',
    'Aur3,134,236,5,Aur4',
    'Aur4,143,261,4,Aur5',
    'Aur5,186,261,6,Aur6',
    'Aur6,216,253,3,Aur7',
    'Aur7,192,239,4,Aur5',
    'Aur8,192,239,4,Aur9',
    'Aur9,171,227,4,Aur3',
    'Aur10,170,262,3,Aur11',
    'Aur11,177,267,3,Aur5',
    'Aur12,169,265,3,Aur11',
    'LMi1,283,150,2,LMi2',
    'LMi2,305,145,2,LMi3',
    'LMi3,318,141,2,LMi4',
    'LMi4,336,145,2,LMi5',
    'LMi5,318,150,2,LMi2',
    'Per1,136,313,3,Per2',
    'Per2,134,305,3,Per3',
    'Per3,147,302,2,Per4',
    'Per4,160,302,3,Per5',
    'Per5,169,310,2,Per6',
    'Per6,185,310,2,Per7',
    'Per7,193,318,4,Per8',
    'Per8,205,324,3,Per9',
    'Per9,213,328,3,Per10',
    'Per10,204,330,2,Per11',
    'Per11,193,325,2,Per12',
    'Per12,179,328,2,Per13',
    'Per13,167,332,4,Per14',
    'Per14,161,336,3,',
    'Per15,192,298,2,Per16',
    'Per16,187,294,2,Per17',
    'Per17,184,297,2,Per6',
    'Cam1,221,312,2,Cam2',
    'Cam2,236,304,2,Cam3',
    'Cam3,251,303,2,Cam4',
    'Cam4,239,286,2,Cam5',
    'Cam5,255,270,2,Cam6',
    'Cam6,276,276,2,',
    'Cam7,224,279,2,Cam4',
    'Lyn1,232,253,2,Lyn2',
    'Lyn2,239,241,2,Lyn3',
    'Lyn3,231,213,2,Lyn4',
    'Lyn4,246,182,2,Lyn5',
    'Lyn5,266,170,2,Lyn6',
    'Lyn6,266,159,2,Lyn7',
    'Lyn7,273,152,2,Lyn8',
    'Lyn8,273,144,3,',
    'Gem1,201,150,5,Gem2',
    'Gem2,193,151,3,Gem4',
    'Gem3,193,140,3,Gem2',
    'Gem4,171,145,4,Gem5',
    'Gem5,156,131,3,Gem6',
    'Gem6,122,143,3,',
    'Gem7,128,158,4,Gem8',
    'Gem8,157,151,3,Gem4',
    'Gem9,193,151,3,Gem10',
    'Gem10,188,159,3,Gem11',
    'Gem11,186,173,3,Gem14',
    'Gem12,202,166,5,Gem11',
    'Gem13,185,191,3,Gem11',
    'Gem14,158,175,4,Gem16',
    'Gem15,135,174,3,Gem14',
    'Gem16,139,184,4,Gem17',
    'Gem17,135,190,3,Gem18',
    'Gem18,132,199,3,',
    'UMa1,394,238,4,UMa2',
    'UMa2,375,239,3,UMa3',
    'UMa3,364,233,3,UMa4',
    'UMa4,350,225,3,UMa5',
    'UMa5,322,227,3,UMa6',
    'UMa6,292,228,3,UMa7',
    'UMa7,272,227,3,UMa8',
    'UMa8,298,216,3,UMa9',
    'UMa9,326,212,3,UMa10',
    'UMa10,348,212,3,',
    'UMa11,298,216,3,UMa6',
    'UMa12,326,212,3,UMa5',
    'UMa13,348,212,3,UMa4',
    'UMa14,271,189,3,UMa15',
    'UMa15,272,185,3,UMa16',
    'UMa16,289,196,3,UMa17',
    'UMa17,296,211,2,UMa11',
    'UMa18,311,169,3,UMa19',
    'UMa19,314,165,3,UMa20',
    'UMa20,338,179,3,UMa21',
    'UMa21,353,195,3,UMa10',
    'UMa22,357,141,3,UMa23',
    'UMa23,355,146,3,UMa24',
    'UMa24,354,168,3,UMa21',
    'Boo1,395,252,3,Boo2',
    'Boo2,410,246,3,Boo4',
    'Boo3,397,257,3,Boo2',
    'Boo4,436,244,3,Boo5',
    'Boo5,436,263,3,Boo6',
    'Boo6,460,267,3,Boo7',
    'Boo7,475,239,4,Boo8',
    'Boo8,492,204,5,Boo9',
    'Boo9,461,233,3,Boo4',
    'Boo10,486,186,3,Boo8',
    'Boo11,523,218,3,Boo8',
    'Ori1,73,243,2,Ori2',
    'Ori2,64,243,2,Ori3',
    'Ori3,59,241,2,Ori4',
    'Ori4,52,245,2,Ori5',
    'Ori5,43,244,3,Ori6',
    'Ori6,37,241,2,Ori7',
    'Ori7,24,234,2,Ori8',
    'Ori8,21,228,2,',
    'Ori9,43,244,3,Ori10',
    'Ori10,52,204,4,Ori12',
    'Ori11,26,184,4,Ori10',
    'Ori12,71,200,3,Ori13',
    'Ori13,71,175,4,Ori10',
    'Ori14,12,170,3,Ori13',
    'Ori15,71,175,4,Ori16',
    'Ori16,105,179,2,Ori17',
    'Ori17,118,200,2,Ori18',
    'Ori18,122,193,2,Ori19',
    'Ori19,106,174,2,Ori20',
    'Ori20,84,172,2,Ori15',
  ];
  size = {width: 0, height: 0};
  scale: number = 0;
  rotation: number = 0;
  rotationSpeed: number = 0.0008;
  max: number = 600;
  mouse = {x: 0, y: 0};

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.parseData();
  }

  ngAfterViewInit(): void {
    this.ctx = <CanvasRenderingContext2D> this.canvas.nativeElement.getContext('2d');
    this.setCanvas();
    this.addMouseListener();
    window.requestAnimationFrame(() => this.loop());
  }

  addMouseListener() {
    document.onmousemove = (event) => {
      this.mouse.x = (event.pageX - window.scrollX - this.size.width/2);
      this.mouse.y = (event.pageY - window.scrollY - this.size.height/2);
    }
  }

  private parseData(): void {
    let lines = this.data;
    for (let i = 0; i < lines.length; i++) {
      let columns = lines[i].split(',');
      let star: Star = {id: columns[0], x: +columns[1], y: +columns[2], size: +columns[3], lineTo: columns[4]};
      if (columns[0].length > 0) {
        if (star.id === 'Polaris') {
          this.polaris = star;
        }
        this.stars[star.id.trim()] = star;
      } else {
        this.extraStars.push(star);
      }
    }
    for (let key in this.stars) {
      let star = this.stars[key];
      let lineTo = this.stars[key].lineTo.trim();
      if (lineTo.length > 0) {
        this.lines.push({x1: star.x, y1: star.y, x2: this.stars[lineTo].x, y2: this.stars[lineTo].y});
      }
    }
  }

  private setCanvas(): void {
    this.size.width = this.canvas.nativeElement.offsetWidth;
    this.size.height = this.canvas.nativeElement.offsetHeight;
    this.canvas.nativeElement.width = this.size.width;
    this.canvas.nativeElement.height = this.size.height;
    this.rotation = 0;
    this.scale = Math.max(this.size.width, this.size.height) / this.max * 1.1;
    this.ctx.translate(this.size.width / 2, this.size.height / 2);
    this.ctx.clearRect(-this.size.width * 2, -this.size.height * 2, this.size.width * 4, this.size.height * 4);
  }

  private getDistance(x: number, y: number): number {
    return Math.pow(Math.pow(this.mouse.x - x, 2) + Math.pow(this.mouse.y - y, 2), 0.5);
  }

  draw(): void {
    let ctx = this.ctx;
    ctx.clearRect(-this.size.width * 3, -this.size.height * 3, this.size.width * 6, this.size.height * 6);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.rotate(this.rotationSpeed);
    this.rotation = (this.rotation + this.rotationSpeed) % (Math.PI * 2);
    for (let key in this.stars) {
      let star: Star = this.stars[key];
      ctx.beginPath();
      ctx.arc((star.x - this.polaris.x) * this.scale, (star.y - this.polaris.y) * this.scale, star.size * this.scale / 6, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
    if (this.mouse.x) {
      for (let line of this.lines) {
        let centerX = ((line.x1 - this.polaris.x) * this.scale + (line.x2 - this.polaris.x) * this.scale) / 2;
        let centerY = ((line.y1 - this.polaris.y) * this.scale + (line.y2 - this.polaris.y) * this.scale) / 2;
        let distance = Math.max(0.0, 1 - (this.getDistance((centerX) * Math.cos(this.rotation) - (centerY) * Math.sin(this.rotation), 
                                        (centerY) * Math.cos(this.rotation) + (centerX) * Math.sin(this.rotation)) / 250));
        ctx.globalAlpha = distance;
        ctx.beginPath();
        ctx.lineWidth = this.scale / 4;
        ctx.moveTo((line.x1 - this.polaris.x) * this.scale, (line.y1 - this.polaris.y) * this.scale);
        ctx.lineTo((line.x2 - this.polaris.x) * this.scale, (line.y2 - this.polaris.y) * this.scale);
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1.0;
      }
    }
  }

  loop(): void {
    if (this.size.width !== this.canvas.nativeElement.offsetWidth || this.size.height !== this.canvas.nativeElement.offsetHeight) {
      this.setCanvas();
    }
    this.draw();
    // Running outside of Angular to prevent unnecessary change detection
    this.zone.runOutsideAngular(() => {
      window.requestAnimationFrame(() => this.loop());
    })
  }
}
