function a() {
    const x=10;
    const y=20;
    const z=30;
    b();
    // console.log(x,y,z);
    function b(){
        console.log(x,y,z);
    }
}
a();