// Hospital flow DX dropdown code library
// maintained by Dr. Chandra Krishnan
// Written in AdobeJS syntax

// #############################################################
// Custom Keystroke script for combo box
// Enter this under the final diagnosis dropdown: 
// Properties > Format > Custom keystroke script
// #############################################################

(function () {

    if (!event.willCommit) {
    
    // Set up an array of comments. \r = carriage return
    var aFdx = [];
    var blastct = getField("CD34 BLASTS").value;
    var bblasts = getField("CD19 BLASTS").value;
    var tblasts = getField("CD2 BLASTS").value;
    var clllym = getField("CD19CD5").value;
    var fllym = getField("CD19CD10").value;
    var plkap = getField("CD38Kap").value;
    var pllam = getField("CD38Lam").value;
    var bkap = getField("CD19KAP").value;
    var blam = getField("CD19LAM").value;
    var plclone = '';
    var bclone = '';
    var plasma = 'XX';
    
    var wild1 = this.getField("Wildcard1").valueAsString;
    var wild2 = this.getField("Wildcard2").valueAsString;
    var wild3 = this.getField("Wildcard3").valueAsString;
    
    if (wild1 == "Plasma cells"){plasma = this.getField("Diff#6").value} else if (wild2 == "Plasma cells"){plasma = this.getField("Diff#7").value} else if (wild3 == "Plasma cells"){plasma = this.getField("Diff#8").value};
    
    
    if (plkap > pllam) {var plclone = "kappa"} else if (plkap < pllam) {var plclone = "lambda"};
    if (bkap > blam) {var bclone = "Kappa"} else if (bkap < blam) {var bclone = "Lambda"};
    
    
    // Free Text
    aFdx[0] = "- ";
    
    // Normal marrow
    aFdx[1] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // Normal marrow - reduced granulocytes and increased erythroids
    aFdx[2] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- Proportional reduction in maturing granulocytes \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // Neg marrow AML
    aFdx[5] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- No evidence of previously characterized myeloid leukemia";
    
    // Neg marrow APL
    aFdx[6] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- No appreciable abnormal promyelocyte population \n- No evidence of previously characterized acute promyelocytic leukemia";
    
    // Neg marrow BALL
    aFdx[10] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- No evidence of previously characterized B-lymphoblasts";
    
    // Neg marrow TALL
    aFdx[11] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- No evidence of previously characterized T-lymphoblasts";
    
    // Neg marrow myeloma
    aFdx[12] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression \n- Polyclonal plasma cells without antigen aberrancy";
    
    // Neg marrow lymphoma
    aFdx[13] = "- No increase in CD34+ myeloid blasts, "+blastct+"% \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // Neg blood/tissue lymphoma
    aFdx[20] = "- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // Neg blood lymphoma+blasts
    aFdx[21] = "- No appreciable CD34+ blast population \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // Neg tissue - scant
    aFdx[22] = "- Scant cellularity with few mixed lymphocytes \n- No monoclonal B-cell population";
    
    // Neg tissue - debris only
    aFdx[23] = "- Scant cellularity with predominance of subviable events / debris \n- No viable monoclonal B-cell population";
    
    // Negative CSF - most T-cells
    aFdx[30] = "- Limited cellularity with predominance of T-cells \n- No clonal lymphoid or abnormal population detected";
    
    // Negative CSF - most T-cells and monocytes
    aFdx[31] = "- Limited cellularity with predominance of T-cells and monocytes \n- No clonal lymphoid or abnormal population detected";
    
    // Negative CSF - scant/acellular
    aFdx[32] = "- Scant cellularity with predominance of debris / subviable cells \n- Few T-cells";
    
    // Negative CSF - mostly blood
    aFdx[33] = "- Predominance of red blood cells \n- Few mixed leukocytes without abnormal population";
    
    // Negative tissue - plasmacytoma
    aFdx[34] = "- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression \n- Polyclonal plasma cells without antigen aberrancy";
    
    // new marrow AML CD34+
    aFdx[40] = "- Increased CD34+ myeloid blasts, "+blastct+"%, with...";
    
    // new marrow AML CD34-
    aFdx[41] = "- Increased CD117+ myeloid blasts, "+blastct+"%, lacking CD34 and expressing ...";
    
    // new marrow AMML CD34-
    aFdx[42] = "- Increased CD117+ myelomonocytic blasts, "+blastct+"%, lacking CD34 and expressing ...";
    
    // new marrow APL
    aFdx[43] = "- Increased abnormal CD117+ promyelocytes, "+blastct+"%, with...";
    
    // new marrow MDS, <10% blasts
    aFdx[44] = "- CD34+ myeloid blasts, "+blastct+"% \n- Maturing granulocytes with mild phenotypic aberrancies \n- Mixed lymphocytes without monoclonal B-cells or aberrant T-cell antigen expression";
    
    // new marrow BALL CD34+
    aFdx[45] = "- Increased CD34+ B-lymphoblasts, "+bblasts+"%, with...";
    
    // new marrow BALL CD34-
    aFdx[46] = "- Increased CD34- B-lymphoblasts, "+bblasts+"%, with...";
    
    // new marrow TALL
    aFdx[47] = "- Increased T-lymphoblasts, "+tblasts+"%, with...";
    
    // new marrow CLL
    aFdx[50] = "- "+bclone+"-restricted CD5+ B-cell population, "+clllym+"% \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // new tissue/blood CLL
    aFdx[51] = "- "+bclone+"-restricted CD5+ B-cell population, "+clllym+"%";
    
    // new marrow FL
    aFdx[52] = "- "+bclone+"-restricted CD10+ B-cell population, "+fllym+"% \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // new marrow DLBCL
    aFdx[53] = "- "+bclone+"-restricted CD10+ B-cell population with large size by forward-scatter, "+fllym+"% \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // new tissue/blood FL
    aFdx[54] = "- "+bclone+"-restricted CD10+ B-cell population, "+fllym+"%";
    
    // new tissue/blood DLBCL
    aFdx[55] = "- "+bclone+"-restricted CD10+ B-cell population with large size by forward-scatter, "+fllym+"%";
    
    // new marrow CD5-CD10- lymphoma
    aFdx[56] = "- "+bclone+"-restricted CD5-, CD10- B-cell population, __%  \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // new blood/tissue CD5-CD10- lymphoma
    aFdx[57] = "- "+bclone+"-restricted CD5-, CD10- B-cell population, __%";
    
    // new marrow myeloma
    aFdx[60] = "- Increased "+plclone+"-restricted plasma cells, "+plasma+"%, with... \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // new marrow hairy cell
    aFdx[61] = "- "+bclone+"-restricted B-cell population expressing CD103 and CD11c, "+fllym+"% \n- No increase in CD34+ myeloid blasts, "+blastct+"% \n";
    
    // Neg blood Sezary
    aFdx[62] = "- No appreciable CD34+ blast population \n- Mixed lymphocytes without monoclonal B-cells \n- No evidence of circulating Sezary cells";
    
    // Generic T-cell aberrancies
    aFdx[63] = "- Abnormal T-cell population expressing .... \n- No monoclonal B-cells detected ";
    
    // Get the export value of the selected item
    var ex_val = event.changeEx;
    
    // Get the corresponding address
    var FlowDx = aFdx[ex_val];
    
    // Populate the text field with the interpretation comments
    getField("Finaldx").value = FlowDx;
    }
    
    })();
    
// #############################################################
// Custom script for interpretation narrative box
// Enter this under the phenotypic description dropdown: 
// Properties > Action > Mouse-up, Run a javascript > Edit
// #############################################################

// Custom Keystroke script for combo box
(function () {

    if (!event.willCommit) {
    
    // Set up an array of comments. \r = carriage return
    var aFlowInt = [];
    
    // No comment inserted
    aFlowInt[0] = "Enter Free Text if you desire, or you can copy/paste here from an external source. ";
    
    // Normal marrow
    aFlowInt[1] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal myeloid or clonal lymphoid population. Flow cytometry may not detect chronic myeloproliferative disorders, classic Hodgkin lymphoma or some T-cell neoplasms. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Normal marrow - reduced granulocytes + increased erythroids
    aFlowInt[2] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. Maturing granulocytes are proportionally reduced, show high side-scatter and no aberrancies of analyzed antigens. There is a relative prominence of CD45-negative erythroid progenitors. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal myeloid or clonal lymphoid population. Proportional reduction in granulocytes and increased erythroid progenitors can be seen with response to acute anemia, after transient marrow injury or after chemotherapy. Flow cytometry may not detect chronic myeloproliferative disorders, classic Hodgkin lymphoma or some T-cell neoplasms. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative BM AML
    aFlowInt[5] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. There is no aberrant leukemic blast population (ie. blasts expressing ____) as previously described. Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal myeloid population. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative BM APL
    aFlowInt[6] = "Flow cytometry was performed on the bone marrow to characterize blasts and abnormal promyelocytes. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no immunophenotypic evidence of increased abnormal promyelocytes (ie. promyelocytic progenitors expressing CD117 and ___, without CD34). Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal myeloid or promyelocytic population. Flow cytometry may not detect chronic myeloproliferative disorders, classic Hodgkin lymphoma or some T-cell neoplasms. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative BM BALL
    aFlowInt[10] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no significant B-lymphoblast population as previously described. Namely, no B-cell progenitors with aberrantly bright CD10/CD58 is seen. The CD10+ B-cells present show scatter properties consistent with hematogones. Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of mature lymphocytes with a predominance of T-cells and smaller numbers of mature B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal B-cell progenitor population. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative BM TALL
    aFlowInt[11] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34+ events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no significant T-lymphoblast population as previously described. Namely, no T-cell progenitors expressing ______ is seen. Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of mature T-cells and smaller numbers of mature B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is no immunophenotypic evidence of an abnormal T-cell progenitor population. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative marrow myeloma
    aFlowInt[12] = "Flow cytometry was performed on the bone marrow/tissue to evaluate for evidence of an abnormal lymphoid and plasma cell population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n Plasma cells (CD38 bright) are few and show polyclonal cytoplasmic light chain expression. Plasma cells show no aberrant expression of CD56 or CD117. Note: Flow cytometry will underestimate the true plasma cell percentage. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is no immunophenotypic evidence of a clonal plasma cell or  lymphoid population. Flow cytometry may not detect small plasma cell clones due to the nature of specimen processing. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    // Negative BM lymphoma
    aFlowInt[13] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is no immunophenotypic evidence of a clonal lymphoid population. Correlation with the morphologic findings is recommended. \n \n Interpreted by  M.D.";
    
    
    // Negative Lymphoma - tissue
    aFlowInt[20] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of B-cells and smaller numbers of T-cells. [#OR, The lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells.] T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. [A small number of B-cells co-express CD10 and show polyclonal light-chain expression, consistent with germinal center cells.] [#OR, There are few events showing dim CD19 and bright CD38, consistent with plasmacytoid lymphocytes.]\n \n There is no evidence of a clonal B-cell population. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    // Negative lymphoma - blood
    aFlowInt[21] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n [# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n \n Most analyzed events are mature granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34+ events.]\n \n There is no evidence of a clonal B-cell population or circulating blasts. Flow cytometry may not detect chronic myeloproliferative disorders or some T-cell neoplasms. Correlation with any morphologic data is recommended. \n \n Interpreted by   M.D.";
    
    // Negative Lymphoma - tissue scant
    aFlowInt[22] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. Overall specimen cellularity is scant, with few events in the expected region of mature lymphocytes. The lymphoid gate (low SSC/FSC) shows few lymphoid cells with a predominance of B-cells and smaller numbers of T-cells. [#OR, The lymphoid gate (low SSC/FSC) shows few lymphoid cells with a predominance of T-cells and smaller numbers of B-cells.] T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. [A small number of B-cells co-express CD10 and show polyclonal light-chain expression, consistent with germinal center cells.] [#OR, There are few events showing dim CD19 and bright CD38, consistent with plasmacytoid lymphocytes.]\n \n There is no evidence of a clonal B-cell population in this limited cellularity sample. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    // Negative Lymphoma - debris only
    aFlowInt[23] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. Overall specimen cellularity is very scant, with most events corresponding to debris and/or subviable cells. The lymphoid gate (low SSC/FSC) shows no viable lymphoid events. No viable monoclonal B-cell population is detected. \n \n While there is no evidence of a clonal B-cell population, the sample shows limited cellularity and is mostly comprised of debris. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    // Negative CSF lymphoma - mostly T-cells
    aFlowInt[30] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens which are consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34+ or CD10+ abnormal events are seen.] \n \n There is no evidence of an abnormal lymphoid or myeloid population in this moderately cellular sample. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    // Negative CSF - mostly T-cells and monocytes
    aFlowInt[31] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34+ or CD10+ abnormal events are seen.] Most remaining viable events show scatter properties consistent with monocytes. \n \n There is no evidence of an abnormal lymphoid or myeloid population in this moderately cellular sample. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    //  Negative CSF - scant
    aFlowInt[32] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express CD2, consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34+ or CD10+ abnormal events are seen.] Most events show scatter properties consistent with debris and/or sub-viable cells. \n \n There is no evidence of an abnormal lymphoid or myeloid population in this low cellularity sample. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    //  Negative CSF - bloody
    aFlowInt[33] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34+ or CD10+ abnormal events are seen.] Most events show scatter properties consistent with debris and/or red-blood cells. \n \n There is no evidence of an abnormal lymphoid or myeloid population in this low cellularity sample. The excess CD45-negative events suggest peripheral blood contamination, though correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    // Negative tissue plasmacytoma
    aFlowInt[34] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid or plasma cell population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n Plasma cells (CD38 bright) are few and show polyclonal cytoplasmic light chain expression. Plasma cells show no aberrant expression of CD56 or CD117. Note: Flow cytometry will underestimate the true plasma cell percentage.  \n \n Mature granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n There is no evidence of a clonal lymphoid or plasma cell population. Correlation with any morphologic data is recommended. \n \n Interpreted by  M.D.";
    
    
    // New AML CD34+
    aFlowInt[40] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts express CD34 and show myeloid differentiation with expression of CD117, CD13, CD33, CD64 and CD15, but not __________. They show aberrant co-expression of __________. They do not express any ______ antigens. \n \n Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is an increase in myeloid blasts, consistent with acute leukemia [#OR myelodysplastic syndrome]. \n \n Interpreted by  M.D.";
    
    // New AML CD34-
    aFlowInt[41] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts express CD117 and show myeloid differentiation with ___ expression of CD34. They express CD13, CD33, CD64 and CD15. They show aberrant co-expression of __________. They do not express any monocyte specific (CD11b bright, CD14) antigens. \n \n Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is an increase in myeloid blasts, consistent with acute leukemia [#OR myelodysplastic syndrome]. \n \n Interpreted by  M.D.";
    
    // New AMML CD34-
    aFlowInt[42] = "Flow cytometry was performed on the bone marrow to characterize blasts. There is an abnormal population that represents __% of total CD45+ events which overlaps the blast (CD45 dim) and monocyte (CD45 bright/high SSC) regions. The blasts express CD117 and show myelomonocytic differentiation with dim-to-absent expression of CD34. They express CD13, CD33, CD64 and CD15, along with monocyte specific markers (CD11b bright They show aberrant co-expression of __________.  \n \n Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is an increase in myelomonocytic blasts, consistent with acute myelomonocytic leukemia [#OR chronic myelomonocytic leukemia]. \n \n Interpreted by  M.D.";
    
    // New APL
    aFlowInt[43] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts show a phenotype suggesting immature promyelocytes, as evidenced by expression of CD117 and CD33, with dim-to-absent CD34, CD15, CD11b and HLA-DR. They express CD13, CD64 and show aberrant co-expression of __________. They do not express any monocyte specific (CD11b bright, CD14) antigens. \n \n Maturing granulocytes are few and overlap with the blast population. The most mature granulocytes show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is an increase in myeloid blasts with an immunophenotype suggestive of acute promyelocytic leukemia. Some less differentiation myeloid leukemias may also show this phenotype. \n \n Interpreted by  M.D.";
    
    // New excess CD34+/MDS
    aFlowInt[44] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates a mild increase in blasts that represents __% of total CD45+ events. The blasts express CD34 and show myeloid differentiation with expression of CD117, CD13, CD33, CD64 and CD15, but not __________. They show aberrant co-expression of __________. They do not express any ______ antigens. \n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n The lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. \n \n There is a mild increase in myeloid blasts with subtle immunophenotypic aberrancies. This may represent a myelodysplastic or myeloproliferative disorder, depending on the morphologic findings. \n \n Interpreted by  M.D.";
    
    // New B-ALL -CD34+
    aFlowInt[45] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of CD19-positive blasts that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD34, CD22 and CD10 (bright) positive and lack expression of CD20. They express CD58 (bright) and aberrantly express ____, but do not express CD117, CD25 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of CD79a and Tdt, but not MPO or cCD3.] This population accounts for ~___% of gated events. This immunophenotype is consistent with precursor B-cell stage of maturation. \n \n There is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells. \n \n The immunophenotypic findings show a precursor B-cell leukemia. \n \n Interpreted by  M.D.";
    
    // New B-ALL -CD34-
    aFlowInt[46] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of CD19-positive blasts that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD22 and CD10 (bright) positive and lack expression of CD34 and CD20. They express CD58 (bright) and aberrantly express ____, but do not express CD117, CD25 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of CD79a and Tdt, but not MPO or cCD3.] This population accounts for ~___% of gated events. This immunophenotype is consistent with precursor B-cell stage of maturation. \n \n There is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells. \n \n The immunophenotypic findings show a precursor B-cell leukemia. \n \n Interpreted by  M.D.";
    
    // New T-ALL -CD34+
    aFlowInt[47] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of T-cell progenitors that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD34, CD10 and CD2 positive, with variable expression of CD1a. They aberrantly express ____, but do not express CD19, CD117 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of cCD3 and Tdt, but not MPO or cCD79a3.] This population accounts for ~___% of gated events. \n \n There is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells. \n \n The immunophenotypic findings show a precursor T-cell leukemia. \n \n Interpreted by  M.D.";
    
    // Typical CLL - marrow
    aFlowInt[50] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of CD19+ B-cells co-expressing CD5, CD20 (dim), CD23, but not CD10, CD103, or FMC-7. CD38 expression is ____. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is a CD5+ clonal B-cell population with an immunophenotype most consistent with chronic lymphocytic leukemia. Mantle cell lymphoma can sometimes show a similar phenotype. Correlation with the morphologic findings and any pending ancillary studies is recommended. \n \n Interpreted by   M.D.";
    
    // Typical CLL - tissue
    aFlowInt[51] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of CD19+ B-cells co-expressing CD5, CD20 (dim), CD23, but not CD10, CD103, or FMC-7. CD38 expression is ____. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. \n \n There is a CD5+ clonal B-cell population with an immunophenotype most consistent with chronic lymphocytic leukemia. Mantle cell lymphoma can sometimes show a similar phenotype. Correlation with the morphologic findings and any pending ancillary studies is recommended. \n \n Interpreted by   M.D.";
    
    
    // Marrow - FL
    aFlowInt[52] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a -restricted population of CD19+ B-cells co-expressing uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows relatively small size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin, such as follicular lymphoma. Flow cytometry is not an optimal method to assess cell size, however, and the phenotype does not exclude the possibility of a large B-cell lymphoma or Burkitt lymphoma. Correlation with morphologic data is recommended. \n \n Interpreted by  M.D. ";
    
    
    // Marrow - DLBCL
    aFlowInt[53] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a -restricted population of B-cells co-expressing CD19 (slightly dim), uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows larger cell size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin. In light of the apparent larger size by forward scatter, the differential diagnosis includes a large B-cell lymphoma or Burkitt lymphoma. Flow cytometry is not an optimal method of assessing cell size and correlation with morphologic data is recommended. \n \n Interpreted by  M.D. ";
    
    
    // Blood/Tissue - FL
    aFlowInt[54] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a -restricted population of CD19+ B-cells co-expressing uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows relatively small size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10. \n \n [#IF NEEDED- The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.] \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin, such as follicular lymphoma. Flow cytometry is not an optimal method to assess cell size, however, and the phenotype does not exclude the possibility of a large B-cell lymphoma or Burkitt lymphoma. Correlation with morphologic data is recommended. \n \n Interpreted by  M.D. ";
    
    // Blood/Tissue - DLBCL
    aFlowInt[55] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a -restricted population of B-cells co-expressing CD19 (slightly dim), uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows larger cell size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10. \n \n [#IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.] \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin. In light of the apparent larger size by forward scatter, the differential diagnosis includes a large B-cell lymphoma or Burkitt lymphoma. Flow cytometry is not an optimal method of assessing cell size and correlation with morphologic data is recommended. \n \n Interpreted by  M.D. ";
    
    // Marrow - MZL
    aFlowInt[56] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of B-cells co-expressing CD19, CD20 (slightly dim) and CD38, but not CD5, CD10 or hairy-cell leukemia antigens (CD103 or CD11c). Surface immunoglobulin expression is ______ in intensity [#OR- Surface immunoglobulin expression is ______ in intensity and best observed using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen with marginal zone lymphoma, lymphoplasmacytic lymphoma or, less often, CD10- follicular lymphoma. Correlation with any morphologic data as well as serum electrophoresis can help differentiate among these possibilities. \n \n Interpreted by   M.D.";
    
    // Blood/Tissue - MZL
    aFlowInt[57] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of B-cells co-expressing CD19, CD20 (slightly dim) and CD38, but not CD5, CD10 or hairy-cell leukemia antigens (CD103 or CD11c). Surface immunoglobulin expression is ______ in intensity [#OR- Surface immunoglobulin expression is ______ in intensity and best observed using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. \n \n [#IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.] \n \n There is a clonal B-cell population which shows an immunophenotype that can be seen with marginal zone lymphoma, lymphoplasmacytic lymphoma or, less often, CD10- follicular lymphoma. Correlation with any morphologic data as well as serum electrophoresis can help differentiate among these possibilities. \n \n Interpreted by   M.D.";
    
    
    // Marrow - Myeloma
    aFlowInt[60] = "Flow cytometry was performed on the bone marrow to evaluate for an abnormal lymphoid and plasma cell population. The events that display scatter properties consistent with plasma cells (CD38 bright, moderate SSC), are enumerated at  __%. These plasma cells show cytoplasmic ______-light chain restriction, aberrantly express ___ and lack expression of CD45, CD19 and CD20. Note, flow cytometry will underestimate the true percentage of plasma cells in the marrow, due to selective loss during processing. \n \n Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n The lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. No monoclonal B-cell lymphoid population is detected. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. \n \n There is a clonal aberrant plasma cell population which may represent plasma cell dyscrasia or plasma cell myeloma, depending on the morphologic and clinical findings. \n \n Interpreted by  M.D.";
    
    // Marrow - HCL
    aFlowInt[61] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of B-cells co-expressing CD19, CD20 (slightly bright) and the hairy-cell leukemia antigens CD103, CD25 and CD11c. They do not express CD10 or CD5. Surface immunoglobulin expression is moderately bright in intensity. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. \n \n The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression. \n \n Most remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34+ myeloid progenitors accounting for __% of total events. \n \n There is a clonal B-cell population which expresses CD103, CD11c and CD25, as is typical of hairy cell leukemia. Correlation with the morphologic data as well as BRAF V600E mutation status is recommended. \n \n Interpreted by   M.D.";
    
    
    // Negative PB Sezary - Seton
    aFlowInt[62] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid or Sezary population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. Specifically, no distinct CD4+/CD26- abnormal circulating T-cells consistent with Sezary cells are seen. \n \n [# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34+ events.]\n \n There is no evidence of circulating Sezary cells or other peripheral T-cell lymphoma. \n \n Interpreted by  M.D.";
    
    
    // Generic T-cell aberrancies
    aFlowInt[63] = "Flow cytometry was performed on the peripheral blood/bone marrow to evaluate for evidence of an abnormal lymphoid or Sezary population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the ____ predominating. CD_ T-cells include an aberrant subpopulation characterized by __________. No conspicuous CD4/CD8 double-positive or double-negative populations are seen. No monoclonal B-cell population is detected. \n \n [# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n \n Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34+ events.]\n \n There is an abnormal mature T-cell population in the background of otherwise unremarkable mature lymphocytes. This finding may represent an immunologic/iatrogenic related subpopulation or a clonal T-cell lymphoproliferative disorder . Correlation with the morphologic findings, clinical history and, if clinically warranted, T-cell gene receptor clonality studies is recommended. \n \n Interpreted by  M.D.";
    
    
    // CPL - Generic negative bone marrow
    aFlowInt[70] = "Flow cytometry shows a predominance of granulocytic precursors. These show no phenotypic abnormalities with the examined antigens. Myeloid blasts account for ___% of cells. These show no abnormalities with the examined antigens, exhibiting no aberrant antigen expression. Lymphocytes comprise a mixture of phenotypically normal T-cells and polytypic light chain-bearing B-cells, the former predominating. \n \n In summary, no abnormal myeloid phenotype and no abnormal or clonal lymphoid phenotype is identified by flow cytometry. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // CPL - Generic negative bone marrow for myeloma
    aFlowInt[71] = "Flow cytometry shows a predominance of granulocytic precursors. Lymphocytes account for ____% of cells. These comprise a mixture of T-cells and B-cells with the former predominating. The B-cells are composed of a mixture of kappa and lambda-bearing cells in the appropriate proportions, and there are no phenotypic differences between the kappa and lambda positive events. The T-cells are composed of a mixture of phenotypically normal CD4 and CD8 positive cells. The myeloid elements show no phenotypic abnormalities with the examined antigens, and myeloid blasts are not increased. Cells with the phenotype of plasma cells (high density CD38, absent to low density CD45) account for ____% of cells. Cytoplasmic light chain characterization shows these to comprise a mixture of kappa and lambda containing plasma cells in the appropriate proportions. \n \n In summary, no abnormal or clonal lymphoid or plasma cell population is identified. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // CPL - Generic negative lymph node/tissue
    aFlowInt[72] = "Flow cytometry shows a predominance of lymphocytes. ____% of events are unclassifiable, appearing as cellular debris. The lymphocytes include a mixture of T-cells and B-cells, the ____ predominating. The B-cells are composed of a mixture of kappa and lambda-bearing cells in the appropriate proportions, and there are no phenotypic differences between kappa positive and lambda positive cells. The T-cells comprise a mixture of phenotypically normal CD4 and CD8 positive cells. \n \n In summary, there is no abnormal or clonal lymphoid phenotype. These findings should be considered in the clinical and morphologic context, specifically noting that flow cytometry may not demonstrate an abnormal phenotype in certain diseases (for example, Hodgkin's disease). ";
    
    // CPL - Generic negative peripheral blood 
    aFlowInt[74] = "Flow cytometry shows a predominance of granulocytes. Lymphocytes account for ____% of cells. These comprise a mixture of T-cells and B-cells with the former predominating. The B-cells are composed of a mixture of kappa and lambda-bearing cells in the appropriate proportions, and there are no phenotypic differences between the kappa and lambda positive events. The T-cells are composed of a mixture of phenotypically normal CD4 and CD8 positive cells, the former predominating. The granulocytes show no phenotypic abnormalities with the examined antigens, and myeloid blasts are not identified. \n \n In summary, no abnormal or clonal lymphocyte population and no abnormal myeloid population is identified. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // Admirand - Generic negative lymph node
    aFlowInt[75] = "Flow cytometry shows a predominance of lymphocytes. ____% of events are unclassifiable, appearing as cellular debris. The lymphocytes are a mixture of T-cells and B-cells, the former predominating. The B-cells are composed of a mixture of kappa and lambda-bearing cells in the appropriate proportions, and there are no phenotypic differences between kappa positive and lambda positive cells. The T-cells comprise a mixture of phenotypically normal CD4 and CD8 positive cells. \n \n In summary, there is no abnormal or clonal lymphoid phenotype. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // Admirand - Generic tissue lymphoma, CD5- CD10-
    aFlowInt[76] = "Flow cytometry shows a predominance of lymphocytes. These harbor an abnormal B-cell population that represents ____% of the total analyzed events. This population shows moderate density expression of the mature B-cell marker CD20 characteristic of B-cells, but shows monotypic expression of immunoglobulin light chain ____. It does not express the B-related marker CD10 or the T-related marker CD5. There is ____ density expression of activation-related antigen CD38. This population appears ____ by forward angle light scatter. The T-cells comprise a mixture of phenotypically normal CD4 and CD8 positive T-cells. \n \n In summary, the specimen shows a clonal B-cell population. The primary differential diagnostic considerations for a CD5 negative, CD10 negative, small B-cell lymphoproliferative disorder include marginal zone B-cell lymphomas or possibly lymphoplasmacytic lymphoma. The absence of CD5 expression makes chronic lymphocytic leukemia or mantle cell lymphoma unlikely and the absence of CD10 expression also makes follicular lymphoma unlikely. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // Blankenship - Peripheral Blood, Reactive, NK-T-cell prominence
    aFlowInt[77] = "Flow cytometry shows a predominance of lymphocytes. Lymphocytes are XXXX % of cells. These comprise a mixture of T-cells and B-cells with the former significantly predominating. The B-cells are composed of a mixture of kappa and lambda-bearing cells in the appropriate proportions. The T-cells are composed of a mixture of CD4 and CD8 positive cells, the XXXX predominating. There is heterogeneity of CD5 on CD3 positive T-cells. Examination of NK-related markers show a significant population of events express the NK-related marker CD57 in the context of CD3, consistent with NK-like T-cells. This does not show prominent CD16 or CD56 expression. These are XXXX% of cells. There is a smaller population of events that express CD56 without CD3 or CD5, consistent with NK-cells. The granulocytes show no phenotypic abnormalities with the examined antigens. \n \n In summary, there is a prominent NK-like T-cell population identified. increased NK-like T-cells may be seen as a reactive population in a variety of clinical settings. This raises the possibility of a tumor of NK-like T-cells, large granular lymphocytic leukemia. However, _____. These findings should be considered in the clinical and morphologic context for optimal interpretation. If clinically equivocal, molecular genetic studies for T-cell receptor gene rearrangements may be informative. ";
    
    // Weir - Generic negative bone marrow
    aFlowInt[78] = " By immunophenotypic and light scatter characteristics, the specimen comprises a mixture of cell types with a predominance of maturing granulocytic elements. Myeloid blasts, as indicated by low density CD45 and low right angle light scatter, are not increased and cannot be distinguished from normal marrow blasts. In addition, the more differentiated myeloid elements demonstrate an appropriate maturation pattern. Lymphocytes represent a mixture of T cells and B cells, the former predominating. The T cells are immunophenotypically within normal limits. The B cells comprise a mixture of kappa- and lambda-bearing cells with no evidence of monoclonality. \n \n In summary, no abnormal myeloid phenotype and no abnormal or clonal lymphoid phenotype is identified by flow cytometry. These findings should be considered in the clinical and morphologic context for optimal interpretation. ";
    
    // Weir - Generic negative peripheral blood
    aFlowInt[79] = " The specimen consists of a mixture of cell types with granulocytes predominating. The lymphocytes represent mostly T cells and fewer admixed B cells. The T cells comprise a mixture of CD4-positive and CD8-positive cells and these show no specific phenotypic abnormalities. The few B cells comprise a mixture of kappa- and lambda-bearing cells with no evidence of monoclonality. \n \n Overall, the pattern is non-specific and does not permit the diagnosis of a clonal lymphoproliferative or myeloproliferative disorder. These findings should be correlated with conventional morphologic examination. ";
    
  
    // Get the export value of the selected item
    var ex_val = event.changeEx;
    
    // Get the corresponding address
    var FlowInt = aFlowInt[ex_val];
    
    // Populate the text field with the interpretation comments
    getField("Interp text").value = FlowInt;
    }
    
    })();

// #############################################################
// Antibody list and automated concatenation with antibody count
// Put code in properties of `Ablist` box: Properties > Format
// #############################################################

    var aWords = event.value.split(", ");
    this.getField("Abtotal").value = aWords.length

    // Put this code to calculate the antbody list of `Ablist`: Properties > Calculate > Custom calculation script
    
    var f = getField("Abtubes");
    var items = [];
    if (typeof f.currentValueIndices=="number")
        items = items.concat(f.getItemAt(f.currentValueIndices,true).split(","));
    else {
        for (var i in f.currentValueIndices) {
            items = items.concat(f.getItemAt(f.currentValueIndices[i],true).split(","));
        }
    }
    items.sort();

    for (var i=items.length-1; i>=1; i--) {
        if (items[i]==items[i-1]) {
            items.splice(i,1);
        }
    }

    if (items[0]==" ")
        items.splice(0,1);

    event.value = items.join(", ");


// #############################################################
// Get total antibody count
// Put this script in `Abtotal` box: Properties > Calculate:
// #############################################################

    var f=this.getField("AbList").value;
    var aWords = f.split(", ");
    var nNumWords = aWords.length;
    event.value=nNumWords;

// #############################################################
// Document level script to send pdf as email
// Put this script in `Click to email` button: 
// Properties > Action > Mouse-up, submit a form
// #############################################################

// mailto: DCMC-FLOWLAB@SETON.ORG


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
    Antibodies tested: Total, " + this.getField("Abtotal").valueAsString + ": " + this.getField("AbList").valueAsString+"\n\nQUALITY CONTROL DISCLAIMER: A quality control direct smear or cytospin was reviewed in conjunction with the analytic data, to assess the specimen integrity.\n\nTESTING PERFORMED AT DELL CHILDREN'S MEDICAL CENTER, AUSTIN, TX (512-324-0000 X40175). Flow cytometry testing was developed and the performance characteristics determined by Dell Children's Medical Center of Central Texas Pathology Laboratory. They have not been cleared or approved by the U.S. Food and Drug Administration.  The FDA has determined that such clearance or approval is not necessary.  These tests are used for clinical purposes.  They should not be regarded as investigational or for research.  This laboratory is certified under the Clinical Laboratory Improvement Amendments of 1988 (CLIA-88) as qualified to perform high complexity clinical laboratory testing.\r\rSome antigens evaluated by flow cytometry may also be evaluated by immunohistochemistry when deemed medically necessary. Concurrent evaluation by IHC on tissue sections is indicated in some cases in order to further characterize or categorize tumors.  IHC may also be necessary to correlate immunophenotype with cell morphology and determine extent of involvement, spatial pattern, and focality of potential disease distribution.";
        
        console.clear();
        console.println(s);
        console.show();
        //app.alert(s);
    }
    
    generateSummary();
    

