try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw new Error('vi');
    } finally {
      console.log("finally");
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
  
  // Logs:
  // "inner" "oops"
  // "finally"
  
  
  // Logs:
  // "finally"
  // "outer" "oops"
  