const devEnvironment = {
    reimLocalUrl:'http://localhost:1111'
}

const prodEnvironment = {
   reimAWSUrl:'http://ec2-13-58-70-113.us-east-2.compute.amazonaws.com:1111'

  // reimAWSUrl: 'http://18.234.71.91:2222/'
}

export let environment = prodEnvironment

if(process.env.REACT_APP_ENV === 'production'){
    environment = prodEnvironment
}