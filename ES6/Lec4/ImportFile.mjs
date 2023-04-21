import Person12,{name as n,a as aa,b as bb} from "./ExportFile.mjs";

const myObj=new Person12('vishal','Prajapati');
console.log(myObj);
console.log(myObj.fullname);

n('xyz');
console.log(aa);
console.log(bb);


