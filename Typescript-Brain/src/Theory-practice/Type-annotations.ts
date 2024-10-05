//Without type annotations
// -----------------------------
let rockers; //Type :any

rockers = "Jonas Jett"; //Type :string
rockers.toUpperCase();
console.log("rockers", rockers);

rockers = 19.48; // Type: number
rockers.toPrecision(1);

// rockers.toUpperCase();
// Error: 'toUpperCase' does not exist on type 'number'.
// ============================================================
//With type Annotations
//==================================================================
let rocker: string;
rocker = "hi john";
