// Actions for All
export class NextNow {
  constructor(public datetime: number) { }
}

// Actions for Page1
export class NextMessageFromFalcorPage1 {
  constructor(public falcorQuery: any[]) { }
}

// Actions for Page2
export class NextMessageFromFalcorPage2 {
  constructor(public falcorQuery: any[]) { }
}

// Actions for Page3
export class NextDocumentsFromFalcorPage3 {
  constructor(public falcorQuery: any[], public targetLayerArray:any[]) { }
}

// Action types
export type Action = NextNow | NextMessageFromFalcorPage1 | NextMessageFromFalcorPage2 | NextDocumentsFromFalcorPage3; 