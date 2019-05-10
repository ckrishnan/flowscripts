// #############################################################
// Document level script to generate report
// Put this script in `SummaryButton` button: 
// Properties > Action > Mouse-up, Run javascript
// #############################################################


function generateSummary() {

  // Add .padEnd() method to better format strings
  String.prototype.padEnd = function padEnd(targetLength,padString) {
      targetLength = targetLength>>0; //floor if number or convert non-number to 0;
      padString = String((typeof padString !== 'undefined' ? padString : ' '));
      if (this.length > targetLength) {
          return String(this);
      }
      else {
          targetLength = targetLength-this.length;
          if (targetLength > padString.length) {
              padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
          }
          return String(this) + padString.slice(0,targetLength);
      }
  };

  var viability = this.getField("Viability").valueAsString;
  var lymphs = this.getField("Diff#1").valueAsString;
  var blym = this.getField("CD19 LYMPHS").valueAsString;
  var tlym = this.getField("CD3 or CD2").valueAsString;
  var mono = this.getField("Diff#2").valueAsString;
  var gran = this.getField("Diff#3").valueAsString;
  var blast = this.getField("Diff#4").valueAsString;
  var debris = this.getField("Diff#5").valueAsString;
  
  var wild1 = this.getField("Wildcard1").valueAsString;
  var wild2 = this.getField("Wildcard2").valueAsString;
  var wild3 = this.getField("Wildcard3").valueAsString;
  
  var abnorm = '';
  var abnorm2 = '';
  var abnorm3 = '';
  if (wild1 == "Abnormal cells"){abnorm = this.getField("Diff#6").value}; 
  if (wild2 == "Abnormal cells #2"){abnorm2 = this.getField("Diff#7").value};
  if (wild3 == "Abnormal cells #3"){abnorm3 = this.getField("Diff#8").value};
  
  var baso = '';
  if (wild1 == "Basophils"){baso = this.getField("Diff#6").value} 
  else if (wild2 == "Basophils"){baso = this.getField("Diff#7").value} 
  else if (wild3 == "Basophils"){baso = this.getField("Diff#8").value};
  
  var hemat = '';
  if (wild1 == "Hematogones"){hemat = this.getField("Diff#6").value} 
  else if (wild2 == "Hematogones"){hemat = this.getField("Diff#7").value} 
  else if (wild3 == "Hematogones"){hemat = this.getField("Diff#8").value};
  
  var plasma = '';
  if (wild1 == "Plasma cells"){plasma = this.getField("Diff#6").value} 
  else if (wild2 == "Plasma cells"){plasma = this.getField("Diff#7").value} 
  else if (wild3 == "Plasma cells"){plasma = this.getField("Diff#8").value};
  
  var other = '';
  if (wild1 == "Other"){other = this.getField("Diff#6").value} 
  else if (wild2 == "Other"){other = this.getField("Diff#7").value} 
  else if (wild3 == "Other"){other = this.getField("Diff#8").value};
  
  var nk = '';
  if (wild1 == "NK-cells"){nk = this.getField("Diff#6").value} 
  else if (wild2 == "NK-cells"){nk = this.getField("Diff#7").value} 
  else if (wild3 == "NK-cells"){nk = this.getField("Diff#8").value};
  
  var nonheme = '';
  if (wild1 == "Non-heme"){nonheme = this.getField("Diff#6").value} 
  else if (wild2 == "Non-heme"){nonheme = this.getField("Diff#7").value} 
  else if (wild3 == "Non-heme"){nonheme = this.getField("Diff#8").value};
      
  var s = 
  "Flow cytometry differential (excluding unclassified events)\n\n"+
  "Viability:".padEnd(24)+ viability +"%\n"+
  "Lymphocytes:".padEnd(24)+ lymphs +"%\n"+
  "  B-cells:".padEnd(24)+ blym +"%\n"+
  "  T-cells:".padEnd(24)+ tlym +"%\n"+
  "Monocytes:".padEnd(24)+ mono +"%\n"+
  "Granulocytes:".padEnd(24)+ gran +"%\n"+
  "Blasts:".padEnd(24)+ blast +"%\n"+
  "CD45-neg/Debris:".padEnd(24)+ debris +"%\n";
  
  if (abnorm != ''){
  s = s+"Abnormal:".padEnd(24)+abnorm+"%\n"};
  if (abnorm2 != ''){
  s = s+"Abnormal #2:".padEnd(24)+abnorm2+"%\n"};
  if (abnorm3 != ''){
  s = s+"Abnormal #3:".padEnd(24)+abnorm3+"%\n"};
  if (baso != ''){
  s = s+"Basophils:".padEnd(24)+baso+"%\n"};
  if (hemat != ''){
  s = s+"Hematogones:".padEnd(24)+hemat+"%\n"};
  if (plasma != ''){
  s = s+"Plasma cells:".padEnd(24)+plasma+"%\n"};
  if (other != ''){
  s = s+"Others:".padEnd(24)+other+"%\n"};
  if (nk != ''){
  s = s+"NK-cells:".padEnd(24)+nk+"%\n"};
  if (nonheme != ''){
  s = s+"Non-hematolymphoid:".padEnd(24)+nonheme+"%\n"};
  
  
  s = s + "\nResults:\n"+this.getField("Finaldx").valueAsString+"\n\n"+
  "Interpretation: " + this.getField("Interp text").valueAsString+ " \n\n"+
  "Antibodies tested: Total, " + this.getField("Abtotal").valueAsString + ": " + this.getField("AbList").valueAsString+"\n\nTECHNICAL WORK PERFORMED BY PENNINSULA PATHOLOGISTS MEDICAL GROUP LABORATORY (393 East Grand Ave, Suite 1, South San Francisco, CA 94080. Ph. 650-616-2951. CLIA#05D1029487). Flow cytometry testing was developed and the performance characteristics determined by PPMG Flow cytometry laboratory. They have not been cleared or approved by the U.S. Food and Drug Administration.  The FDA has determined that such clearance or approval is not necessary.  These tests are used for clinical purposes.  They should not be regarded as investigational or for research.  This laboratory is certified under the Clinical Laboratory Improvement Amendments of 1988 (CLIA-88) as qualified to perform high complexity clinical laboratory testing.\n\n"+
  "PROFESSIONAL INTERPRETATION PERFORMED BY CLINICAL PATHOLOGY ASSOCIATES (3445 Executive Center Drive, Suite 250, Austin, TX 78731. CLIA#45D2052154)\n\n"+
  "Some antigens evaluated by flow cytometry may also be evaluated by immunohistochemistry when deemed medically necessary. Concurrent evaluation by IHC on tissue sections is indicated in some cases in order to further characterize or categorize tumors.  IHC may also be necessary to correlate immunophenotype with cell morphology and determine extent of involvement, spatial pattern, and focality of potential disease distribution.";
      
      console.clear();
      console.println(s);
      console.show();
      //app.alert(s);
  }
  
  generateSummary();