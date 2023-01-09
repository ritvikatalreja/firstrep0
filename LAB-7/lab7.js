angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var items = [
        {f_id:'AF1',f_type:'Dining Table',f_woodtype:"Sheeshsam",f_description:"Clean and advanced modern style",f_price:"55000"},
        {f_id:'AF2',f_type:'Cabinet',f_woodtype:"Teak",f_description:"Ample storage with 3 shelves",f_price:"25000"},
        {f_id:'AF3',f_type:'Wooden Sofa',f_woodtype:"German",f_description:"Luxuriously comfortable seating",f_price:"60000"},
        {f_id:'AF4',f_type:'Benzo Chair',f_woodtype:"Rose",f_description:"Sturdy high back chair",f_price:"17000"},
        {f_id:'AF5',f_type:'Coffee Table',f_woodtype:"Teak",f_description:"Touch of classic style to your porch",f_price:"15000"},
        {f_id:'AF6',f_type:'Bookcase',f_woodtype:"Mahagony",f_description:"Panel and glass doors",f_price:"29000"},
        {f_id:'AF7',f_type:'TV Storage',f_woodtype:"Satin",f_description:"Storage combination/glass door",f_price:"22000"}

    ]
  
    $scope.items = items;
    $scope.rowlimit = 7;
});