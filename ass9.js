let a=[0,2,5,6,7,3,4,45,23,12,78,56,90]
for(let i=0;i<=a.length;i++)
    for(let j=0;j<i;j++)
    if(a[i]>a[j]){
        let x=a[i];
        a[i]=a[j];
        a[j]=x;
    }
console.log(a)

