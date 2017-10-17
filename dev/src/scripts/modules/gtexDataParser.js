export function getGtexURLs(){
    return {
        "geneExp": "https://gtexportal.org/rest/v1/dataset/featureExpression?feature=gene&gencode_id=",
        "tissue": "https://gtexportal.org/rest/v1/dataset/color"
    }
}

export function getTissueClusters(){
    const newick = "((((((((((Brain_Caudate_basal_ganglia:4.42,Brain_Anterior_cingulate_cortex_BA24:4.42):3.48,Cervix_Endocervix:7.90):2.15,Cervix_Ectocervix:10.05):0.52,(Muscle_Skeletal:9.19,Liver:9.19):1.39):3.27,((((Kidney_Cortex:4.73,Breast_Mammary_Tissue:4.73):1.34,Brain_Spinal_cord_cervical_c-1:6.06):0.26,Vagina:6.32):2.92,(Small_Intestine_Terminal_Ileum:5.70,Adipose_Visceral_Omentum:5.70):3.53):4.61):7.34,(((Whole_Blood:7.69,Brain_Amygdala:7.69):1.90,(Brain_Substantia_nigra:6.48,Brain_Cerebellar_Hemisphere:6.48):3.11):4.14,(Fallopian_Tube:6.77,Artery_Aorta:6.77):6.96):7.46):3.87,((Heart_Atrial_Appendage:5.61,Brain_Frontal_Cortex_BA9:5.61):6.37,Testis:11.99):13.08):5.08,(Uterus:11.31,Prostate:11.31):18.84):14.53,(((Stomach:6.96,Nerve_Tibial:6.96):4.62,((Skin_Not_Sun_Exposed_Suprapubic:3.59,Ovary:3.59):2.75,Pancreas:6.34):5.24):4.79,(Skin_Sun_Exposed_Lower_leg:10.66,Pituitary:10.66):5.70):28.31):31.23,(((((((((Colon_Sigmoid:7.28,Adipose_Subcutaneous:7.28):0.91,Heart_Left_Ventricle:8.19):1.14,Cells_Transformed_fibroblasts:9.34):1.87,Brain_Hippocampus:11.20):2.21,(Lung:9.77,Esophagus_Gastroesophageal_Junction:9.77):3.65):3.89,Artery_Tibial:17.31):0.40,(Thyroid:12.34,Esophagus_Muscularis:12.34):5.37):5.01,((Spleen:8.11,Brain_Cerebellum:8.11):4.46,Brain_Cortex:12.58):10.14):12.60,(((((Brain_Nucleus_accumbens_basal_ganglia:8.48,Brain_Hypothalamus:8.48):3.94,Bladder:12.43):0.38,((Cells_EBV-transformed_lymphocytes:8.06,Adrenal_Gland:8.06):3.29,(Colon_Transverse:6.91,Brain_Putamen_basal_ganglia:6.91):4.44):1.46):2.01,Artery_Coronary:14.81):0.67,(Minor_Salivary_Gland:10.05,Esophagus_Mucosa:10.05):5.43):19.83):40.59);";
    return newick;
}