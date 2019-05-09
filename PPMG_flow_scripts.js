// Flow worksheet scripts specifically for PPMG flow cases
// maintained by Dr. Chandra Krishnan
// Written in AdobeJS syntax

// #############################################################
// Document level script to generate report
// Put this script in `SummaryButton` button: 
// Properties > Action > Mouse-up, Run javascript
// #############################################################


function generateSummary() {

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
    if (wild1 == "Abnormal cells"){abnorm = this.getField("Diff#6").value} 
    else if (wild2 == "Abnormal cells"){abnorm = this.getField("Diff#7").value} 
    else if (wild3 == "Abnormal cells"){abnorm = this.getField("Diff#8").value};
    
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
        
    var s = "Flow cytometry differential (excluding unclassified events)\n\n\
    Viability:\t\t\t"+ viability +"%\n\
    Lymphocytes:\t\t"+ lymphs +"%\n\
      B-cells:\t\t\t"+ blym +"%\n\
      T-cells:\t\t\t"+ tlym +"%\n\
    Monocytes:\t\t\t"+ mono +"%\n\
    Granulocytes:\t\t"+ gran +"%\n\
    Blasts:\t\t\t"+ blast +"%\n\
    CD45-neg/Debris:\t\t"+ debris +"%\n";
    
    if (abnorm != ''){
    s = s+"Abnormal:\t\t\t"+abnorm+"%\n"};
    if (baso != ''){
    s = s+"Basophils:\t\t\t"+baso+"%\n"};
    if (hemat != ''){
    s = s+"Hematogones:\t\t"+hemat+"%\n"};
    if (plasma != ''){
    s = s+"Plasma cells:\t\t"+plasma+"%\n"};
    if (other != ''){
    s = s+"Others:\t\t\t"+other+"%\n"};
    if (nk != ''){
    s = s+"NK-cells:\t\t\t"+nk+"%\n"};
    if (nonheme != ''){
    s = s+"Non-hematolymphoid:\t"+nonheme+"%\n"};
    
    
    s = s + "\nResults:\n\
    "+this.getField("Finaldx").valueAsString+"\n\
    " + "\n\n\
    Interpretation: " + this.getField("Interp text").valueAsString+ " \n\n\
    Antibodies tested: Total, " + this.getField("Abtotal").valueAsString + ": " + this.getField("AbList").valueAsString+"\n\n"+"\n\nTECHNICAL WORK PERFORMED BY PENNINSULA PATHOLOGISTS MEDICAL GROUP LABORATORY (393 East Grand Ave, Suite 1, South San Francisco, CA 94080. Ph. 650-616-2951. CLIA#05D1029487). Flow cytometry testing was developed and the performance characteristics determined by PPMG Flow cytometry laboratory. They have not been cleared or approved by the U.S. Food and Drug Administration.  The FDA has determined that such clearance or approval is not necessary.  These tests are used for clinical purposes.  They should not be regarded as investigational or for research.  This laboratory is certified under the Clinical Laboratory Improvement Amendments of 1988 (CLIA-88) as qualified to perform high complexity clinical laboratory testing.\r\rPROFESSIONAL INTERPRETATION PERFORMED BY CLINICAL PATHOLOGY ASSOCIATES (3445 Executive Center Drive, Suite 250, Austin, TX 78731. CLIA#45D2052154)\r\rSome antigens evaluated by flow cytometry may also be evaluated by immunohistochemistry when deemed medically necessary. Concurrent evaluation by IHC on tissue sections is indicated in some cases in order to further characterize or categorize tumors.  IHC may also be necessary to correlate immunophenotype with cell morphology and determine extent of involvement, spatial pattern, and focality of potential disease distribution.";
        
        console.clear();
        console.println(s);
        console.show();
        //app.alert(s);
    }
    
    generateSummary();
    

