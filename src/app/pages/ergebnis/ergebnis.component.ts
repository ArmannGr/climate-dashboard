import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'ergebnisComponent',
  moduleId: module.id,
  templateUrl: 'ergebnis.component.html'
})

export class ErgebnisComponent implements OnInit{

  ngOnInit(){
    this.drawErgebnis();
  }

  drawErgebnis(){
    let placeholderDiv = document.getElementById('drawErgebnis');
    // Replace this url with the url of your Tableau dashboard
    let url = 'https://public.tableau.com/shared/TQZ3PQ76Z?:display_count=n&:origin=viz_share_link';
    let options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished     loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.drawErgebnis = new tableau.Viz(placeholderDiv, url, options);
  }


}
