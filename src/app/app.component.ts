import { Component } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
declare const $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProInspections App';
  WW1: number = 0;
  Lot: string ;
  DW1: number = 0;
  Result1: number;
  WW2: number = 0;
  DW2: number = 0;
  Result2: number;
  WW3: number = 0;
  DW3: number = 0;
  Result3: number;
  WW4: number = 0;
  DW4: number = 0;
  Result4: number;
  SideResult:number;
  Passing:number;
  PI:number;
  ChartValue1:number;
  Result14:String;
  Result144: String;
  Design: String;
  Footing: String;
  Boring: string;


  CalcTotal1(WW1, DW1)
{
 
    let Lots:string = this.Lot
    let Boring:string = this.Boring
 let Total1:string = (((parseFloat(WW1) - parseFloat(DW1)) / parseFloat(DW1)) * 100).toFixed(2);
 this.Result1 = parseFloat(Total1);
 let sum:string = (((parseFloat(DW1) / (parseFloat(WW1))).toFixed(6)))
  this.SideResult = parseFloat(sum)
  
  if (this.Passing > 50 ){
    if (this.Result1 > 50){
        if (this.PI > this.ChartValue1){
              
            
        } 
        else if (this.PI < this.ChartValue1){
              this.Result14 = "MH Elastic Silt"
        }
    }
    else if  (this.Result1 < 50){
        if (this.PI > 7 || this.PI > this.ChartValue1){
              this.Result14 = "CL Lean clay" 
        } 
        else if (this.PI < 4 || this.PI < this.ChartValue1){
              this.Result14 = "ML Silt"
        }
    }
  }
  else if (this.Passing < 50){
    if (this.PI < this.ChartValue1){
        this.Result14 = "SM Silty sand" 
    } 
    else if  (this.PI > this.ChartValue1){
        this.Result14 = "SC Clayey Sand" 
    } 
  }
}
CalcTotal2(WW2, DW2)
{
  
 let Total2:string = (((parseFloat(WW2) - parseFloat(DW2)) / parseFloat(DW2)) * 100).toFixed(1);
 this.Result2 = parseFloat(Total2)
 let TotalPI:string = (this.Result1 - this.Result2).toFixed(1)
 this.PI = parseFloat(TotalPI)
 this.ChartValue1 = 0.73 * (this.Result1-20)
 if (this.Passing > 50 ){
  if (this.Result1 > 50){
      if (this.PI > this.ChartValue1){
            this.Result14 = "CH Fat Clay"
            
      } 
      else if (this.PI < this.ChartValue1){
            this.Result14 = "MH Elastic Silt"
      }
  }
  else if  (this.Result1 < 50){
      if (this.PI > 7 || this.PI > this.ChartValue1){
            this.Result14 = "CL Lean clay" 
      } 
      else if (this.PI < 4 || this.PI < this.ChartValue1){
            this.Result14 = "ML Silt"
      }
  }
}
else if (this.Passing < 50){
  if (this.PI < this.ChartValue1){
      this.Result14 = "SM Silty sand" 
  } 
  else if  (this.PI > this.ChartValue1){
      this.Result14 = "SC Clayey Sand" 
  } 
}
if (this.PI < 15  ){
    this.Result144 = "Low"
    this.Design = "A"
    this.Footing = '24"*18"*8" , 2 #4s continuous'
}
else if (this.PI >= 15 && this.PI <= 20  ){
    this.Result144 = "Moderate"
    if (this.PI >= 15 && this.PI <= 17.5){
    this.Design = "A1" 
    this.Footing = '18"*18"*12" , 2 #4s continuous'
    }
    else{
        this.Design = "B"
        this.Footing = '30"*18"*12" , 2 #4s continuous'
    }
}
else if (this.PI >= 21 && this.PI < 26  ){
    this.Result144 = "Moderately High"
    
    if (this.PI >= 21 && this.PI <= 23.5  ){
        this.Design = "C"
        this.Footing = '36"*18"*12" , 2 #4s continuous'
    }

        else 
        if (this.PI >= 23.5 && this.PI < 26  ){
                this.Design = "D"
            this.Footing = '42"x18"x12", 2 #4s continuous'
            }
        }
    

else if (this.PI >= 26 ){
    this.Result144 = "High"
    if (this.PI >= 26 && this.PI <= 63  ){
    this.Design = "E"
    this.Footing = '48"*18"*12" , 2 #4s continuous'
        }
    else if (this.PI > 63){
    this.Design = "F"
    this.Footing = '60"*18"*12" , 2 #4s continuous'
        }
    }
}
CalcTotal3(WW3, DW3)
{
  
 let Total3:string = (((parseFloat(WW3) - parseFloat(DW3)) / parseFloat(DW3)) * 100).toFixed(1);
 this.Result3 = parseFloat(Total3);

}
CalcTotal4(WW4, DW4)
{
  
 let Total4:string = ((parseFloat(WW4) - parseFloat(DW4)) / parseFloat(WW4)).toFixed(6);
 this.Result4 = parseFloat(Total4)
  let TotalPassing:string = (this.Result4 * 100).toFixed(1); 
  this.Passing = parseFloat(TotalPassing);
 this.ChartValue1 = 0.73 * (this.Result1-20)
    if (this.Passing > 50 ){
        if (this.Result1 > 50){
            if (this.PI > this.ChartValue1){
                  this.Result14 = "CH Fat Clay" 
            } 
            else if (this.PI < this.ChartValue1){
                  this.Result14 = "MH Elastic Silt"
            }
        }
        else if  (this.Result1 < 50){
            if (this.PI > 7 || this.PI > this.ChartValue1){
                  this.Result14 = "CL Lean clay" 
            } 
            else if (this.PI < 4 || this.PI < this.ChartValue1){
                  this.Result14 = "ML Silt"
            }
        }
    }
    else if (this.Passing < 50){
        if (this.PI < this.ChartValue1){
            this.Result14 = "SM Silty sand" 
        } 
        else if  (this.PI > this.ChartValue1){
            this.Result14 = "SC Clayey Sand" 
        } 
    }
}
exporttocsv(){
    var htmltable = document.getElementById("myTable1").innerHTML;
    var data = [
        {
          Lot: "Lot #",
          age: "Boring Results",
          average: "Liquid Limit",
          approved: "Plastic Limit",
          description: "P.I.",
          passing : "%Passing",
          moisture : "%Moisture",
          potential : "S/S Potential",
          soil : "Soil Classification",
          footing : "Footing D*W*T",
          Bearing : "Bearing Capacity",
          design : "Design",
        },
        {
          name: this.Lot,
          age: this.Boring,
          average: this.Result1,
          approved: this.Result2,
          description: this.PI,
          passing : this.Passing,
          moisture : this.Result3,
          potential : this.Result144,
          soil : this.Result14,
          footing : this.Footing,
          Bearing : "3000 psf",
          design : this.Design,
        },
        {

        },
        {

        },
        {

        },
        {
            empty: "",
            sample : "Soil Simple",
            wet : "Wet Weight",
            dry : "Dry Weight",
            result1 : "",
            result2 : "",
            result3 : "",
        },
        {
            LL: "LL",
            S1 : "S1",
            wet :  this.WW1,
            dry : this.DW1,
            result1 : "",
            result2 : this.Result1,
            result3 : "",
        },
        {
            LL: "PL",
            S1 : "S2",
            wet :  this.WW2,
            dry : this.DW2,
            result1 : "",
            result2 : this.Result2,
            result3 : this.SideResult,
        },
        {
            LL: "mios",
            S1 : "",
            wet :  this.WW3,
            dry : this.DW3,
            result1 : "",
            result2 : this.Result3,
            result3 : "",
        },
        {
            LL: "pass",
            S1 : "",
            wet :  this.WW4,
            dry : this.DW4,
            result1 : "",
            result2 : this.Result4,
            result3 : "",
        },  
      ];
      alert(this.Lot)
     alert(this.Result1)
      new Angular2Csv(data, 'My Report');
}
print(printable){

    var printContents = document.getElementById("printable").innerHTML;
    var popupWin = window.open('', '_blank', 'width=300,height=300');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
    popupWin.document.close();
    
}

};

