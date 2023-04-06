function createUser(role)
{
    let user;
    adminPermissions=['Delete a user' , 'Add a Marque' , 'Add a User']
    ownerPermissions=['Add a Marque' , 'Delete his own marque']
    if (role=='admin')
    {
         user={
         role:'admin',
         permissions:adminPermissions
        }
    }

    if (role='owner')
    {
        user={
            role:'owner',
            permissions:ownerPermissions
        }
    }



    user.getName=function(){
        console.log(`${user.role} is created.`);
    }


    user.getPermissions=function(){
        for(let item of user.permissions)
        console.log(item);
    }


return user;
}


const admin=createUser('admin')
admin.getName()
admin.getPermissions()