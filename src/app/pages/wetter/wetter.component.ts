import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'wetterComponent',
  moduleId: module.id,
  templateUrl: 'wetter.component.html'
})
export class WetterComponent implements OnInit{

  viz: any;

  ngOnInit(){
    var placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/DEMO_V1/Dashboard2?:language=de-DE&:display_count=n&:origin=viz_share_link';
    var options = {
      hideTabs: true,
      width: "100%",
      height: "800px",
      onFirstInteractive: function() {
        // The viz is now ready and can be safely used.
        console.log("Run this code when the viz has finished     loading.");
      }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);

  }


}
