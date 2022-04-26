// #############################################################
// Custom script for interpretation narrative box
// Enter this under the phenotypic description dropdown: 
// Properties > Action > Mouse-up, Run a javascript > Edit
// #############################################################

// Custom javascript for narrative interpretation combo box
function keystrokeIntlist() {
  var plclone = '';
  var bclone = '';
  var plkap = getField("CD38Kap").value;
  var pllam = getField("CD38Lam").value;
  var bkap = getField("CD19KAP").value;
  var blam = getField("CD19LAM").value;
  if (plkap > pllam) {var plclone = "kappa"} else if (plkap < pllam) {var plclone = "lambda"};
  if (bkap > blam) {var bclone = "Kappa"} else if (bkap < blam) {var bclone = "Lambda"};

  var doc = getField("Casestatus").value;
  var plratio = getField("Plasma cell K/L").value;

    if (!event.willCommit) {
    
    // Set up an array of comments. \r = carriage return
    var aFlowInt = [];
    
    // No comment inserted
    aFlowInt[0] = "Enter Free Text if you desire, or you can copy/paste here from an external source. ";
    
    // Normal marrow
    aFlowInt[1] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal myeloid or clonal lymphoid population. Flow cytometry may not detect chronic myeloproliferative disorders, classic Hodgkin lymphoma or some T-cell neoplasms. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Normal marrow - reduced granulocytes + increased erythroids
    aFlowInt[2] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. Maturing granulocytes are proportionally reduced, show high side-scatter and no aberrancies of analyzed antigens. There is a relative prominence of CD45-negative erythroid progenitors.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal myeloid or clonal lymphoid population. Proportional reduction in granulocytes and increased erythroid progenitors can be seen with response to acute anemia, after transient marrow injury or after chemotherapy. Flow cytometry may not detect chronic myeloproliferative disorders, classic Hodgkin lymphoma or some T-cell neoplasms. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative BM AML
    aFlowInt[5] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. Some events in this region express CD19 and CD10 and show scatter properties consistent with hematogones. There is no aberrant leukemic blast population (ie. blasts expressing ____) as previously described. Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal myeloid population. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative BM APL
    aFlowInt[6] = "Flow cytometry was performed on the bone marrow to characterize blasts and abnormal promyelocytes. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no immunophenotypic evidence of increased abnormal promyelocytes (ie. promyelocytic progenitors expressing CD117 but not  __, CD11b or CD15). Most analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal myeloid or promyelocytic population. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative BM BALL
    aFlowInt[10] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no significant B-lymphoblast population as previously described. Namely, no B-cell progenitors with aberrantly bright ____ or bright CD58 are seen. The CD10+ B-cells present show scatter properties consistent with hematogones. Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of mature lymphocytes with a predominance of T-cells and smaller numbers of mature B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal B-cell progenitor population. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative BM TALL
    aFlowInt[11] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates few CD34-positive events that represent __% of total CD45+ events. These events express the myeloid markers CD117 and CD13, consistent with maturing myeloid progenitors. There is no significant T-lymphoblast population as previously described. Namely, no T-cell progenitors expressing ______ are seen. Maturing granulocytes show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of mature T-cells and smaller numbers of mature B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is no immunophenotypic evidence of an abnormal T-cell progenitor population. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative marrow myeloma
    aFlowInt[12] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid and plasma cell population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nPlasma cells (CD38 bright) are few and show polyclonal cytoplasmic light chain expression (K:L ratio = "+plratio+"). Plasma cells show no aberrant expression of CD56 or CD117. Note: Flow cytometry will underestimate the true plasma cell percentage.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is no immunophenotypic evidence of a clonal plasma cell or  lymphoid population. Flow cytometry may not detect small plasma cell clones due to the nature of specimen processing. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative BM lymphoma
    aFlowInt[13] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is no immunophenotypic evidence of a clonal lymphoid population. Correlation with the morphologic findings is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    
    // Negative Lymphoma - tissue
    aFlowInt[20] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of B-cells and smaller numbers of T-cells. [#OR, The lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells.] T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. [A small number of B-cells co-express CD10 and show polyclonal light-chain expression, consistent with germinal center cells.] [#OR, There are few events showing dim CD19 and bright CD38, consistent with plasmacytoid lymphocytes.]\n\nThere is no evidence of a clonal B-cell population. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative lymphoma - blood
    aFlowInt[21] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\n[# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n\nMost analyzed events are mature granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34-positive events.]\n\nThere is no evidence of a clonal B-cell population or circulating blasts. Flow cytometry may not detect chronic myeloproliferative disorders or some T-cell neoplasms. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative Lymphoma - tissue scant
    aFlowInt[22] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. Overall specimen [## lymphoid] cellularity is scant, with few events in the expected region of mature lymphocytes. The cells in the usual lymphoid gate (low SSC/FSC) show a T-cell predominance and smaller numbers of B-cells. [## T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating.] Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. [A small number of B-cells co-express CD10 and show polyclonal light-chain expression, consistent with germinal center cells.] [#OR, There are few events showing dim CD19 and bright CD38, consistent with plasmacytoid lymphocytes.]\n\nMost events show scatter properties consistent with non-specific debris and/or blood.\n\nThere is no evidence of a clonal B-cell population in this limited cellularity sample. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative Lymphoma - debris only
    aFlowInt[23] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. Overall specimen cellularity is very scant, with most events corresponding to non-specific debris and/or subviable cells. The lymphoid gate (low SSC/FSC) shows no viable lymphoid events. [## OR The cells in the usual lymphoid gate (low SSC/FSC) are exceedingly few and correspond to T-cells.] No viable monoclonal B-cell population is detected.\n\nWhile there is no evidence of a clonal B-cell population, the sample shows limited cellularity and is mostly comprised of debris. Flow cytometry may not detect classical Hodgkin lymphoma, some T-cell neoplasms or non-hematolymphoid malignancies. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative CSF lymphoma - mostly T-cells
    aFlowInt[30] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens which are consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34-positive or CD10+ abnormal events are seen.]\n\nThere is no evidence of an abnormal lymphoid or myeloid population in this moderately cellular sample. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative CSF - mostly T-cells and monocytes
    aFlowInt[31] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34-positive or CD10+ abnormal events are seen.] Most remaining viable events show scatter properties consistent with monocytes.\n\nThere is no evidence of an abnormal lymphoid or myeloid population in this moderately cellular sample. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    //  Negative CSF - scant
    aFlowInt[32] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are very few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express [## CD2 or CD5], consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34-positive or CD10+ abnormal events are seen.] Most events show scatter properties consistent with debris and/or sub-viable cells.\n\nThere is no evidence of an abnormal lymphoid or myeloid population in this low cellularity sample. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    //  Negative CSF - bloody
    aFlowInt[33] = "Flow cytometry was performed on the cerebrospinal fluid to assess for an abnormal lymphoid population. A limited panel of antibodies was performed due to low specimen volume. There are few events on the forward-vs-side scatter plot that lie in the expected region of lymphoid cells. The events in this region express antigens consistent with T-cells. CD19-positive B-cells are nearly absent, and do not include an abnormal population. [#If needed - Specifically, no CD34-positive or CD10+ abnormal events are seen.] Most events show scatter properties consistent with debris and/or red-blood cells.\n\nThere is no evidence of an abnormal lymphoid or myeloid population in this low cellularity sample. The excess CD45-negative events suggest peripheral blood contamination, though correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative tissue plasmacytoma
    aFlowInt[34] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid or plasma cell population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nPlasma cells (CD38 bright) are few and show polyclonal cytoplasmic light chain expression (K:L ratio = "+plratio+"). Plasma cells show no aberrant expression of CD56 or CD117. Note: Flow cytometry will underestimate the true plasma cell percentage. \n\nMature granulocytes show high side-scatter and no aberrancies of analyzed antigens.\n\nThere is no evidence of a clonal lymphoid or plasma cell population. Correlation with any morphologic data is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    
    // New AML CD34-positive
    aFlowInt[40] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts express CD34 and show myeloid differentiation with expression of CD117, CD13, CD33, CD64 and CD15, but not __________. They show aberrant co-expression of __________. [Evaluation of cytoplasmic markers shows uniform expression of MPO, but not Tdt, cCD79a or cCD3.] They do not express any ______ antigens.\n\nMaturing granulocytes are proportionally reduced, show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is an increase in myeloid blasts, consistent with acute leukemia [#OR myelodysplastic syndrome].\n\nInterpreted by "+doc+", M.D.";
    
    // New AML CD34-negative
    aFlowInt[41] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts express CD117 and show myeloid differentiation with ___ expression of CD34. They express CD13, CD33, CD64 and CD15. They show aberrant co-expression of __________. [Evaluation of cytoplasmic markers shows uniform expression of MPO, but not Tdt, cCD79a or cCD3.] They do not express any monocyte specific (CD11b bright, CD14) antigens.\n\nMaturing granulocytes are proportionally reduced, show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is an increase in myeloid blasts, consistent with acute leukemia [#OR myelodysplastic syndrome].\n\nInterpreted by "+doc+", M.D.";
    
    // New AMML CD34-negative
    aFlowInt[42] = "Flow cytometry was performed on the bone marrow to characterize blasts. There is an abnormal population that represents __% of total CD45+ events which overlaps the blast (CD45 dim) and monocyte (CD45 bright/high SSC) regions. The blasts express CD117 and show myelomonocytic differentiation with dim-to-absent expression of CD34. They express CD13, CD33, CD64 and CD15, along with monocyte specific markers (CD11b bright, dim CD14). [Evaluation of cytoplasmic markers shows uniform expression of MPO, but not Tdt, cCD79a or cCD3.] They show aberrant co-expression of __________. \n\nMaturing granulocytes are proportionally reduced, show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is an increase in myelomonocytic blasts, consistent with acute myelomonocytic leukemia [#OR chronic myelomonocytic leukemia].\n\nInterpreted by "+doc+", M.D.";
    
    // New APL
    aFlowInt[43] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates an abnormal population that represents __% of total CD45+ events. The blasts show a phenotype suggesting immature promyelocytes, as evidenced by expression of CD117 and bright CD33, with dim-to-absent CD34, and absent CD15, CD11b and HLA-DR. They express CD13, CD64 and show aberrant co-expression of __________. They do not express any monocyte specific (CD11b bright, CD14) antigens. [Evaluation of cytoplasmic markers shows uniform expression of MPO, but not Tdt, cCD79a or cCD3.]\n\nMaturing granulocytes are few and overlap with the blast population. The most mature granulocytes show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is an increase in myeloid blasts with an immunophenotype suggestive of acute promyelocytic leukemia. Some less differentiation myeloid leukemias may also show this phenotype.\n\nInterpreted by "+doc+", M.D.";
    
    // New excess CD34-positive/MDS
    aFlowInt[44] = "Flow cytometry was performed on the bone marrow to characterize blasts. Gating on blasts (mod CD45+/low SSC) demonstrates a mild increase in blasts that represents __% of total CD45+ events. The blasts express CD34 and show myeloid differentiation with expression of CD117, CD13, CD33, CD64 and CD15, but not __________. They show aberrant co-expression of __________. They do not express any ______ antigens.\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nThe lymphoid gate (strong CD45+, low SSC) shows a heterogeneous population of lymphocytes with a predominance of T-cells and smaller numbers of B-cells and NK-cells. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected.\n\nThere is a mild increase in myeloid blasts with subtle immunophenotypic aberrancies. This may represent a myelodysplastic or myeloproliferative disorder, depending on the morphologic findings.\n\nInterpreted by "+doc+", M.D.";
    
    // New B-ALL -CD34-positive
    aFlowInt[45] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of CD19-positive blasts that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD34, CD22 and CD10 (bright) positive and lack expression of CD20. They express CD58 (bright) and aberrantly express ____, but do not express CD117, CD25 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of CD79a and Tdt, but not MPO or cCD3.] This population accounts for ~___% of gated events. This immunophenotype is consistent with precursor B-cell stage of maturation.\n\nThere is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells.\n\nThe immunophenotypic findings show a precursor B-cell leukemia.\n\nInterpreted by "+doc+", M.D.";
    
    // New B-ALL -CD34-negative
    aFlowInt[46] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of CD19-positive blasts that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD22 and CD10 (bright) positive and lack expression of CD34 and CD20. They express CD58 (bright) and aberrantly express ____, but do not express CD117, CD25 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of CD79a and Tdt, but not MPO or cCD3.] This population accounts for ~___% of gated events. This immunophenotype is consistent with precursor B-cell stage of maturation.\n\nThere is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells.\n\nThe immunophenotypic findings show a precursor B-cell leukemia.\n\nInterpreted by "+doc+", M.D.";
    
    // New T-ALL -CD34-positive
    aFlowInt[47] = "Flow cytometry was performed on the bone marrow to evaluate the progenitor cell and lymphoid populations. Gating on blasts (mod CD45+/low SSC) demonstrates a prominent abnormal population of T-cell progenitors that show dim-to-negative expression of CD45 and low side-scatter. The blasts are uniformly CD34, CD10 and CD2 positive, with variable expression of CD1a. They aberrantly express ____, but do not express CD19, CD117 or CD56. [Evaluation of cytoplasmic markers shows uniform expression of cCD3 and Tdt, but not MPO or cCD79a3.] This population accounts for ~___% of gated events.\n\nThere is a smaller number of residual maturing myeloid precursors and few mature lymphocytes, most of which are T-cells.\n\nThe immunophenotypic findings show a precursor T-cell leukemia.\n\nInterpreted by "+doc+", M.D.";
    
    // Typical CLL - marrow
    aFlowInt[50] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD5, CD20 (slightly dim), CD200 (bright), but not CD10 or CD103. Significant CD49d expression (characterized as >30% of abnormal cells) is present / absent. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a CD5+ clonal B-cell population with an immunophenotype most consistent with chronic lymphocytic leukemia, as supported by co-expression of CD200. Less than 3% of mantle cell lymphoma have been shown to display bright CD200. [## if needed - Significant CD49d expression in the setting of CLL represents a strong independent adverse prognostic features (ref. J Clin Oncol. 2014 Mar 20;32(9):897-904).] Correlation with the morphologic findings and any pending ancillary studies is recommended.\n\nInterpreted by "+doc+", M.D.";

    // Typical Mantle cell - marrow
    aFlowInt[501] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD5 and CD20 (uniform), but not CD10, CD200 or CD103. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a CD5+ clonal B-cell population with an immunophenotype most suggestive of mantle cell lymphoma. CLL may have a similar phenotype, but would be expected to show bright CD200, which is not seen here. Correlation with the morphologic findings and any pending ancillary studies is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Typical CLL - tissue/blood
    aFlowInt[51] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD5, CD20 (dim), CD200 (bright), but not CD10 or CD103. Significant CD49d expression (characterized as >30% of abnormal cells) is present / absent. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThere is a CD5+ clonal B-cell population with an immunophenotype most consistent with chronic lymphocytic leukemia, as supported by co-expression of bright CD200. Less than 3% of mantle cell lymphoma have been shown to display bright CD200. [## if needed - Significant CD49d expression in the setting of CLL represents a strong independent adverse prognostic features (ref. J Clin Oncol. 2014 Mar 20;32(9):897-904).] Correlation with the morphologic findings and any pending ancillary studies is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Typical Mantle cell - tissue/blood
    aFlowInt[511] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD5 and CD20 (uniform), but not CD10, CD200 or CD103. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThere is a CD5+ clonal B-cell population with an immunophenotype most suggestive of mantle cell lymphoma. CLL may have a similar phenotype, but would be expected to show bright CD200, which is not seen here. Correlation with the morphologic findings and any pending ancillary studies is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // CD5+ CLL vs. CLL-like MBL - blood
    aFlowInt[512] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a relatively small "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD5, CD20 (dim), CD200 (bright), but not CD10 or CD103. Significant CD49d expression (characterized as >30% of abnormal cells) is present / absent. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThere is a small CD5+ clonal B-cell population with an immunophenotype resembling chronic lymphocytic leukemia, as supported by co-expression of bright CD200. Less than 3% of mantle cell lymphoma have been shown to display bright CD200. The differential diagnosis includes low-level peripheral involvement by chronic lymphocytic leukemia, or involvement by so-called CLL-like monoclonal B-cell lymphocytosis (MBL). CLL-like MBL is defined as the presence of a monoclonal B-cell population with a phenotype resembling CLL but with an absolute B-cell count below 5K/ul and without lymphadenopathy, splenomegaly, immune-mediated cytopenias, or other clinical features of CLL. Individuals with this condition have a low risk, typically 1% per year, of developing progressive disease that requires treatment. Circulating clonal B-cells < 0.5k/ul are typicall indolent and show stable lifetime MBL counts. Clonal B-cells > 0.5K/ul may have a slightly increased risk of rising counts or development of lymphadenopathy. Distinction between low level CLL and CLL-like MBL requires correlation with the aforementioned clinical findings and any pending ancillary studies (ref. Cytometry B Clin Cytom. 2010 ; 78(Suppl 1): S19–S23).\n\nInterpreted by "+doc+", M.D.";

    // CD5+ CLL vs. non-CLL-like MBL - blood
    aFlowInt[513] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a relatively small "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing CD20 (uniform) and CD200 (variable), but not CD5, CD10 or CD103. Surface immunoglobulin expression is moderate-to-dim in intensity [#OR Surface immunoglobulin expression is moderate-to-dim in intensity and best seen when using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThere is a small CD5- CD10- clonal B-cell population. The differential diagnosis includes low-level peripheral involvement by a low-grade B-cell lymphoma, or involvement by so-called non-CLL-like monoclonal B-cell lymphocytosis (MBL). Non-CLL-like MBL is defined as the presence of a monoclonal B-cell population with an absolute B-cell count below 5K/ul and without lymphadenopathy, splenomegaly, immune-mediated cytopenias, or other clinical features of lymphoma. Individuals with this condition typically are older and have a presumed low risk of progressive disease that requires treatment. Circulating clonal B-cells < 0.5k/ul are typicall indolent and show stable lifetime MBL counts. Clonal B-cells > 0.5K/ul may have a slightly increased risk of rising counts or development of lymphadenopathy. Distinction between low level circulating lymphoma and this non-CLL-like MBL requires correlation with the aforementioned clinical findings and any pending ancillary studies (ref. Annals of Hematology, 2016, Vol.95(10), pp.1695-1704).\n\nInterpreted by "+doc+", M.D.";
    
    // Marrow - FL
    aFlowInt[52] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows relatively small size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin, such as follicular lymphoma. Flow cytometry is not an optimal method to assess cell size, however, and the phenotype does not exclude the possibility of a large B-cell lymphoma or Burkitt lymphoma. Correlation with morphologic data is recommended.\n\nInterpreted by "+doc+", M.D. ";
    
    
    // Marrow - DLBCL
    aFlowInt[53] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of B-cells expressing CD19 (slightly dim), uniform CD20 and ___, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows larger cell size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin. In light of the apparent larger size by forward scatter, the differential diagnosis includes a large B-cell lymphoma or Burkitt lymphoma. Flow cytometry is not an optimal method of assessing cell size and correlation with morphologic data is recommended.\n\nInterpreted by "+doc+", M.D. ";
    
    
    // Blood/Tissue - FL
    aFlowInt[54] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of CD19+ B-cells expressing uniform CD20 and CD10, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows relatively small size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10.\n\n[#IF NEEDED- The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.]\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin, such as follicular lymphoma. Flow cytometry is not an optimal method to assess cell size, however, and the phenotype does not exclude the possibility of a large B-cell lymphoma or Burkitt lymphoma. Correlation with morphologic data is recommended.\n\nInterpreted by "+doc+", M.D. ";
    
    // Blood/Tissue - DLBCL
    aFlowInt[55] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of B-cells expressing CD19 (slightly dim), uniform CD20 and ___, but not CD5 [#OR or hairy-cell leukemia antigens (CD103 or CD11c)]. Surface immunoglobulin expression is moderate in intensity. Overall, this population represents approximately __% of all CD45+ events and shows larger cell size by forward-scatter. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies. Fewer polyclonal B-cells are also noted, which lack CD10.\n\n[#IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.]\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen most often with lymphomas of follicle center origin. In light of the apparent larger size by forward scatter, the differential diagnosis includes a large B-cell lymphoma or Burkitt lymphoma. Flow cytometry is not an optimal method of assessing cell size and correlation with morphologic data is recommended.\n\nInterpreted by "+doc+", M.D. ";
    
    // Marrow - MZL
    aFlowInt[56] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted of B-cells expressing CD19 and CD20 (slightly dim), but not CD5, CD10 or hairy-cell leukemia antigens (CD103 or CD11c). Surface immunoglobulin expression is ______ in intensity [#OR- Surface immunoglobulin expression is ______ in intensity and best observed using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen with marginal zone lymphoma, lymphoplasmacytic lymphoma or, less often, CD10- follicular lymphoma. Correlation with any morphologic data as well as serum electrophoresis can help differentiate among these possibilities.\n\nInterpreted by "+doc+", M.D.";
    
    // Blood/Tissue - MZL
    aFlowInt[57] = "Flow cytometry was performed to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a "+bclone.toLowerCase()+"-restricted population of B-cells expressing CD19 and CD20 (slightly dim), but not CD5, CD10 or hairy-cell leukemia antigens (CD103 or CD11c). Surface immunoglobulin expression is ______ in intensity [#OR- Surface immunoglobulin expression is ______ in intensity and best observed using polyclonal light-chain reagents]. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\n[#IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows no appreciable events.]\n\nThere is a clonal B-cell population which shows an immunophenotype that can be seen with marginal zone lymphoma, lymphoplasmacytic lymphoma or, less often, CD10- follicular lymphoma. Correlation with any morphologic data as well as serum electrophoresis can help differentiate among these possibilities.\n\nInterpreted by "+doc+", M.D.";
    
    
    // Marrow - Myeloma
    aFlowInt[60] = "Flow cytometry was performed on the bone marrow to evaluate for an abnormal lymphoid and plasma cell population. The events that display scatter properties consistent with plasma cells (CD38 bright, moderate SSC), are enumerated at  __%. These plasma cells show cytoplasmic ______-light chain restriction, aberrantly express ___ and lack expression of CD45, CD19 and CD20. The cytoplasmic light-chain K:L ratio is "+plratio+"). Note, flow cytometry will underestimate the true percentage of plasma cells in the marrow, due to selective loss during processing.\n\nMaturing granulocytes show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThe lymphoid gate (low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. No monoclonal B-cell lymphoid population is detected.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes.\n\nThere is a clonal aberrant plasma cell population which may represent plasma cell dyscrasia or plasma cell myeloma, depending on the morphologic and clinical findings.\n\nInterpreted by "+doc+", M.D.";
    
    // Marrow - HCL
    aFlowInt[61] = "Flow cytometry was performed on the bone marrow to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of B-cells expressing CD19, CD20 (slightly bright), CD200 and the hairy-cell leukemia antigens CD103 and CD25. They do not express CD10 or CD5. Surface immunoglobulin expression is moderately bright in intensity. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.\n\nThere is a clonal B-cell population which expresses CD103, CD200 and CD25, as is typical of hairy cell leukemia. Correlation with the morphologic data as well as BRAF V600E mutation status is recommended.\n\nInterpreted by "+doc+", M.D.";

    // Blood - HCL
    aFlowInt[611] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid population. The lymphoid gate (CD45+, low SSC/FSC) shows a ____-restricted population of B-cells expressing CD19, CD20 (slightly bright), CD200 and the hairy-cell leukemia antigens CD103 and CD25. They do not express CD10 or CD5. Surface immunoglobulin expression is moderately bright in intensity. Overall, this population represents approximately __% of all CD45+ events. The remainder of lymphoid events corresponds to a mixed population of CD4 and CD8 T-cells, which do not show antigenic aberrancies.\n\nThe monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.\n\nMost remaining analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [## if needed  Gating on blasts (mod CD45+/low SSC) shows few CD34-positive myeloid progenitors accounting for __% of total events.]\n\nThere is a clonal B-cell population which expresses CD103, CD200 and CD25, as is typical of hairy cell leukemia. Correlation with the morphologic data as well as BRAF V600E mutation status is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    // Negative PB Sezary - Seton
    aFlowInt[62] = "Flow cytometry was performed on the peripheral blood to evaluate for evidence of an abnormal lymphoid or Sezary population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the former predominating. Neither aberrant antigen expression among lymphoid cells nor a monoclonal B-cell population is detected. Specifically, no distinct CD4+/CD26- abnormal circulating T-cells consistent with Sezary cells are seen.\n\n[# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34-positive events.]\n\nThere is no evidence of circulating Sezary cells or other peripheral T-cell lymphoma.\n\nInterpreted by "+doc+", M.D.";
    
    
    // Generic T-cell aberrancies
    aFlowInt[63] = "Flow cytometry was performed on the peripheral blood/bone marrow to evaluate for evidence of an abnormal lymphoid or Sezary population. The lymphoid gate (CD45+, low SSC/FSC) shows a heterogeneous population of lymphoid cells with a predominance of T-cells and smaller numbers of B-cells and NK-cells. T-cells show a mixture of CD4 and CD8 subtypes, with the ____ predominating. CD_ T-cells include an aberrant subpopulation characterized by __________. No conspicuous CD4/CD8 double-positive or double-negative populations are seen. No monoclonal B-cell population is detected.\n\n[# IF NEEDED - The monocyte/large lymphocyte gate (CD45+, moderate SSC/FSC) shows predominantly CD33 bright cells consistent with monocytes. Monocytes do not show aberrant antigen expression.]\n\nMost analyzed events are maturing granulocytes which show high side-scatter and no aberrancies of analyzed antigens. [IF CD34 WAS RUN -Gating on blasts (mod CD45+/low SSC) shows no appreciable increase in CD34-positive events.]\n\nThere is an abnormal mature T-cell population in the background of otherwise unremarkable mature lymphocytes. This finding may represent an immunologic/iatrogenic related subpopulation or a clonal T-cell lymphoproliferative disorder . Correlation with the morphologic findings, clinical history and, if clinically warranted, T-cell gene receptor clonality studies is recommended.\n\nInterpreted by "+doc+", M.D.";
    
    
    // MJC - Negative blood
    aFlowInt[70] = "B-cells show polytypic light chain expression.  T-cells display normal T-antigen expression.  Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.  No significant CD34+ blast population is identified. \n\nInterpreted by "+doc+", M.D. / Hematopathologist";
    
    // MJC - CLL-LIKE MBL
    aFlowInt[71] = "A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses CD5, CD19, dim CD20, CD23, bright CD200, and dim surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD10 or CD103.  Significant CD49d expression (characterized as >30% of abnormal cells) is [##].  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression. \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: A small population of monotypic B-cells with a CLL-like phenotype are identified ([default value]% of total CD45+ cells, [default value]% of lymphocytes).  The differential diagnosis for this finding includes low level peripheral blood involvement by a CLL/SLL versus a monoclonal B-cell lymphocytosis (see references below).  If there is no lymphadenopathy, organomegaly, serum paraprotein or associated autoimmune/infectious diseases, and if this population remains stable for at least 3 months, these findings may be best characterized as a monoclonal B-cell lymphocytosis (MBL).  MBL are seen in 3-5% of adults, more commonly in older individuals, and the majority has been shown to be stable over time.  MBLs appear to have a low likelihood of progression to frank lymphoma or leukemia. \n\nReferences:\n1. Rawstron AC. Monotypic B-cell lymphocytosis: Good news for patients and CLL investigators. Leuk Lymphoma. 2007 Jun;48(6):1057-8.\n2. Fung SS, et al. Clinical progression and outcome of patients with monotypic B-cell lymphocytosis. Leuk Lymphoma. 2007 Jun;48(6):1087-1091.\n3. Ghia P, et al.  Chronic lymphocytic leukemia. Crit Rev Oncol Hematol. 2007 May 31\n4. Marti GE, et al.  The International Familial CLL Consortium.  Diagnostic criteria for monotypic B-cell lymphocytosis. Br J Haematol. 2005 Aug;130(3):325-32. ";
    
    // MJC - non-CLL-LIKE MBL
    aFlowInt[72] = "A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses  CD19, CD20, and surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD5, CD10 or CD103.  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression. \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: A small population of monotypic B-cells with a marginal zone-like phenotype are identified ([##]% of total CD45+ cells, [##]% of lymphocytes).The differential diagnosis includes low-level peripheral involvement by a low-grade B-cell lymphoma, or involvement by so-called non-CLL-like monoclonal B-cell lymphocytosis (MBL). Non-CLL-like MBL is defined as the presence of a monoclonal B-cell population with an absolute B-cell count below 5K/ul and without lymphadenopathy, splenomegaly, immune-mediated cytopenias, or other clinical features of lymphoma. Individuals with this condition typically are older and have a presumed low risk of progressive disease that requires treatment. Circulating clonal B-cells < 0.5k/ul are typicall indolent and show stable lifetime MBL counts. Clonal B-cells > 0.5K/ul may have a slightly increased risk of rising counts or development of lymphadenopathy. Distinction between low level circulating lymphoma and this non-CLL-like MBL requires correlation with the aforementioned clinical findings and any pending ancillary studies (ref. Annals of Hematology, 2016, Vol.95(10), pp.1695-1704).";
    
    // MJC - CLL
    aFlowInt[74] = " A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses CD5, CD19, dim CD20, CD23, bright CD200, and dim surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD10 or CD103.  Significant CD49d expression (characterized as >30% of abnormal cells) is [##].  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: The findings are most consistent with chronic lymphocytic leukemia, as supported by co-expression of bright CD200. Less than 3% of mantle cell lymphoma have been shown to display bright CD200. \n\n[## if needed - Significant CD49d expression in the setting of CLL represents a strong independent adverse prognostic features (ref. J Clin Oncol. 2014 Mar 20;32(9):897-904).]";
    
    // MJC - MCL
    aFlowInt[75] = " A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses CD5, CD19, bright CD20, dim-moderate CD200, and bright surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD10, CD23, or CD103.  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: The differentiatl diagnosis for the immunohenotypic findings primaryly includes mantle cell lymphoma (favored) and CLL/SLL with an atypical immunophenotype.  Correlation with FISH for IGH::CCND1 or cyclin D1/SOX11 immunohistochemistry is suggested. ";
    
    // MJC - CD10+ B-CELL LYMPHOMA
    aFlowInt[76] = "A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses CD10, CD19, CD20, and surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD5, CD23, or CD103.  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: This monotypic B-cell population has an immunophenotype that can be seen most often with lymphomas of follicle center origin. The differential diagnosis includes follicular lymphoma,  large B-cell lymphoma and Burkitt lymphoma.  Correlation with morphologic findings is required for further classification.";
    
    // MJC - MZL
    aFlowInt[77] = "A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses CD19, CD20, and surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD5, CD10, CD23, or CD103.  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression. [Plasma cells show polytypic cytoplasmic light chain expression.]  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: The differential diagnosis for this monotypic B-cell population includes marginal zone lymphoma, lymphoplasmacytic lymphoma or, less often, CD10- follicular lymphoma. Based on FSC properties, the cell size appears small and large B-cell lymphoma is considered less likely. Correlation with morphologic findings and other ancillary studies (SPEP, serum IFE) is required for further classification.";
    
    // MJC - MYELOMA
    aFlowInt[78] = "A monotypic plasma cell population is present ([##]% of WBCs) that expresses bright CD38 and cytoplasmic "+plclone.toLowerCase()+"-light chain,  lack expression of CD45, CD19 and CD20. [B cells show polytypic surface light chain expression.]  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: Due to selective loss of plasma cells during processing, correlation with morphologic findings and/or CD138 immunohistochemistry is required for plasma cell enumeration and final classification of this process.";
    
    // MJC - BALL
    aFlowInt[79] = " An abnormal precursor B-cell population is present ([##]% of total CD45+ cells) that expresses bright CD10, CD19, CD22, CD34, dim to negative CD45, bright CD58, cCD79a, and TdT without co-expression of  CD20, myelomonocytic markers, or T-antigens.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist";
    
    // MJC - TALL
    aFlowInt[80] = "An abnormal precursor T-cell population is present ([##]% of total CD45+ cells) that expresses CD1a, CD2, cCD3, CD5 CD34, dim to negative CD45, and TdT without co-expression of  surface CD3, CD4, CD8, CD56, myelomonocytic markers, or B-antigens.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist";

    // MJC - HCL
    aFlowInt[81] = "A monotypic B-cell population is present ([##]% of lymphs, [##]% of WBCs) that expresses  CD19, CD20, CD25, CD103 and surface "+bclone.toLowerCase()+"-light chain, without co-expression of CD23 or CD103.  The remaining lymphocytes are comprised of T-cells that show normal T-antigen expression.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.]  \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: The immunophenotyic findings are consistent with hairy cell leukemia.  Correlation with morphologic findings, and, if clinically indicated, BRAF V600E mutation analysis is suggested. ";

    // MJC - AML
    aFlowInt[82] = "An abnormal myeloid blast population is present ([##]% of total CD45+ cells) that expresses bright CD13, CD33, CD34, dim to negative CD45, CD64, CD117, and MPO without co-expression of TdT, B-, or T-antigens. [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: Correlation with cytogenetic, molecular, and clinical findings is required for final WHO classification of this acute myeloid leukemia. ";

    // MJC - MDS
    aFlowInt[83] = " An abnormal myeloid blast population is present ([##]% of total CD45+ cells) that expresses bright CD13, CD33, CD34, dim to negative CD45, CD64, CD117, and MPO without co-expression of  TdT, B-, or T-antigens.  [Granulocytes and monocytes show a normal pattern of myelomonocytic antigen expression.] \n\nInterpreted by "+doc+", M.D. / Hematopathologist \n\nCOMMENT: The differential diagnosis includes myelodysplastic syndrome with increased blasts and acute myeloid leukemia.  [Given that flow cytometry may underestimate the blast percentage in some instances, correlation with morphologic findings is required for blast enumeration and final classification.";

    // Get the export value of the selected item
    var ex_val = event.changeEx;
    
    // Get the corresponding address
    var FlowInt = aFlowInt[ex_val];
    
    // Populate the text field with the interpretation comments
    getField("Interp text").value = FlowInt;
    }
  }
   
   



// #############################################################
// Document level script to generate report
// Put this script in `SummaryButton` button: 
// Properties > Action > Mouse-up, Run javascript
// #############################################################


function generateSummary() {
  // Add .repeat method for padEnd method
  if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
      'use strict';
      if (this == null)
        throw new TypeError('can\'t convert ' + this + ' to object');

      var str = '' + this;
      // To convert string to integer.
      count = +count;
      // Check NaN
      if (count != count)
        count = 0;

      if (count < 0)
        throw new RangeError('repeat count must be non-negative');

      if (count == Infinity)
        throw new RangeError('repeat count must be less than infinity');

      count = Math.floor(count);
      if (str.length == 0 || count == 0)
        return '';

      // Ensuring count is a 31-bit integer allows us to heavily optimize the
      // main part. But anyway, most current (August 2014) browsers can't handle
      // strings 1 << 28 chars or longer, so:
      if (str.length * count >= 1 << 28)
        throw new RangeError('repeat count must not overflow maximum string size');

      var maxCount = str.length * count;
      count = Math.floor(Math.log(count) / Math.log(2));
      while (count) {
        str += str;
        count--;
      }
      str += str.substring(0, maxCount - str.length);
      return str;
    }
  }

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

  // Important PPMG worksheet add-on to change disclaimer based on who is signing out
  var pathologist = this.getField("Casestatus").valueAsString;
  var ppmd = "";
  if (pathologist == "Chandra Krishnan") {
      ppmd = "PROFESSIONAL INTERPRETATION PERFORMED BY CLINICAL PATHOLOGY ASSOCIATES (3445 Executive Center Drive, Suite 250, Austin, TX 78731. CLIA#45D2052154)\n\n";
  } else if (pathologist == "Michael Cascio") {
      ppmd = "PROFESSIONAL INTERPRETATION PERFORMED BY PENNINSULA PATHOLOGISTS MEDICAL GROUP LABORATORY (383 East Grand Ave, Suite A, South San Francisco, CA 94080. Ph. 650-616-2951. CLIA#05D1029487)\n\n";
  } else {
    ppmd = "";
  }

  var viability = this.getField("Viability").valueAsString;
  var lymphs = this.getField("Diff#1").valueAsString;
  var blym = this.getField("CD19 LYMPHS").valueAsString;
  var tlym = this.getField("CD3 or CD2").valueAsString;
  var mono = this.getField("Diff#2").valueAsString;
  var gran = this.getField("Diff#3").valueAsString;
  var blast = this.getField("Diff#4").valueAsString;
  var debris = this.getField("Diff#5").valueAsString;
  var plratio = getField("Plasma cell K/L").valueAsString;

  
  var bioCD19 = this.getField("bioCD19").valueAsString;
  var bioCD20 = this.getField("bioCD20").valueAsString;
  var bioCD22 = this.getField("bioCD22").valueAsString;
  var bioCD33 = this.getField("bioCD33").valueAsString;
  var bioCD38 = this.getField("bioCD38").valueAsString;

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
  s = s+"Plasma cells:".padEnd(24)+plasma+"% (K:L ratio = "+plratio+") \n"};
  if (other != ''){
  s = s+"Others:".padEnd(24)+other+"%\n"};
  if (nk != ''){
  s = s+"NK-cells:".padEnd(24)+nk+"%\n"};
  if (nonheme != ''){
  s = s+"Non-hematolymphoid:".padEnd(24)+nonheme+"%\n"};

  var b = "Biomarker Status (% of abnormal cells expressing therapeutic targets): \n";
  if (bioCD19 != ''){
    b = b+"CD19 expression:".padEnd(24)+bioCD19+"%\n"};
  if (bioCD20 != ''){
    b = b+"CD20 expression:".padEnd(24)+bioCD20+"%\n"};
  if (bioCD22 != ''){
    b = b+"CD22 expression:".padEnd(24)+bioCD22+"%\n"};
  if (bioCD33 != ''){
    b = b+"CD33 expression:".padEnd(24)+bioCD33+"%\n"};
  if (bioCD38 != ''){
    b = b+"CD38 expression:".padEnd(24)+bioCD38+"%\n"};
  if ((bioCD19 == '') && (bioCD20 == '') && (bioCD22 == '') && (bioCD33 == '') && (bioCD38 == '')){
    b = ""
  };              
  
  s = s + "\nResults:\n"+this.getField("Finaldx").valueAsString+"\n\n"+
  b+"\n"+
  "Interpretation: " + this.getField("Interp text").valueAsString+ " \n\n"+  
  "Antibodies tested: Total, " + this.getField("Abtotal").valueAsString + ": " + this.getField("AbList").valueAsString+"\n\nTECHNICAL WORK PERFORMED BY PENNINSULA PATHOLOGISTS MEDICAL GROUP LABORATORY (383 East Grand Ave, Suite A, South San Francisco, CA 94080. Ph. 650-616-2951. CLIA#05D1029487). Flow cytometry testing was developed and the performance characteristics determined by PPMG Flow cytometry laboratory. They have not been cleared or approved by the U.S. Food and Drug Administration.  The FDA has determined that such clearance or approval is not necessary.  These tests are used for clinical purposes.  They should not be regarded as investigational or for research.  This laboratory is certified under the Clinical Laboratory Improvement Amendments of 1988 (CLIA-88) as qualified to perform high complexity clinical laboratory testing.\n\n"+
  ppmd+
  "Some antigens evaluated by flow cytometry may also be evaluated by immunohistochemistry when deemed medically necessary. Concurrent evaluation by IHC on tissue sections is indicated in some cases in order to further characterize or categorize tumors.  IHC may also be necessary to correlate immunophenotype with cell morphology and determine extent of involvement, spatial pattern, and focality of potential disease distribution.";

 
      
      console.clear();
      console.println(s);
      console.show();
      //app.alert(s);
  }
  
  generateSummary();
