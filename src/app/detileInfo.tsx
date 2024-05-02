export type worksType = {
  ImageURL: string;
  TopImage: string;
  title?: string;
  category: string;
  Isclient: string;
  overView: string;
  // ---
  scoop: string;
  tool: string;
  schedule: string;
  prototypeURL?: string;
  CreationFlow_spTb: string;
  CreationFlow_pc: string;
  // ---
  purpose1: string;
  purpose2?: string;
  purpose3?: string;
  concept1: string;
  concept2?: string;
  concept3?: string;
  target1: string;
  target2?: string;
  target3?: string;
  target4?: string;
  IllustrationSp?: string;
  IllustrationPcTb?: string;

  // ---
  oneKnotTtl?: string;
  oneKnotTxt1?: string;
  oneKnotTxt2?: string;
  oneKnotTxt3?: string;
  oneKnotTxt4?: string;
  oneKnotTxt5?: string;
  twoKnotTtl?: string;
  twoKnotTxt1?: string;
  twoKnotTxt2?: string;
  ImprovementPoints1?: string;
  ImprovementPoints2?: string;
  ImprovementPoints3?: string;
  // ---
  mainVisual_sp: string;
  mainVisual_tb?: string;
  mainVisual_pc?: string;
};

export type DetileImgType = {
  mainVisual_sp: string;
  mainVisual_tb: string;
  mainVisual_pc: string;
  category: string;
};
export type DetileTopType = {
  TopImage: string;
  category: string;
  title?: string;
  Isclient: string;
  overView: string;
};

export type DetileEreaType = {
  scoop: string;
  tool: string;
  schedule: string;
  prototypeURL: string;
  CreationFlow_spTb: string;
  CreationFlow_pc: string;
};
export type DetileOverViewType = {
  purpose1: string;
  purpose2?: string;
  purpose3?: string;
  concept1: string;
  concept2?: string;
  concept3?: string;
  target1: string;
  target2?: string;
  target3?: string;
  target4?: string;
  IllustrationSp?: string;
  IllustrationPcTb?: string | undefined;
  // ---
  oneKnotTtl?: string;
  oneKnotTxt1?: string;
  oneKnotTxt2?: string;
  oneKnotTxt3?: string;
  oneKnotTxt4?: string;
  oneKnotTxt5?: string;
  twoKnotTtl?: string;
  twoKnotTxt1?: string;
  twoKnotTxt2?: string;
  ImprovementPoints1?: string;
  ImprovementPoints2?: string;
  ImprovementPoints3?: string;
};
