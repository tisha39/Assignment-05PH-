document.getElementById('container-btn').addEventListener('click',function(){
    window.location.href = './blog.html'
})

function getInputFieldId(id){
    return  parseFloat(document.getElementById(id).value)
  
}
let  mainBalance = parseFloat(document.getElementById('mainBalance').innerText)

const formattedDate = new Date().toString();


// click button 1 


document.getElementById('donate-btn1').addEventListener('click',function(){
   
    const value1 = getInputFieldId('collect-value1')
    if(value1 > 0 || !isNaN){
        const moneyReplace = parseFloat(document.getElementById('add-money-1').innerText);
        value1.valueOf = ''
        const newBalance = moneyReplace + value1
        document.getElementById('add-money-1').innerText = newBalance
        mainBalance = mainBalance -value1
        document.getElementById('mainBalance').innerText = mainBalance
    
        const container = document.createElement('div')
        container.className = 'mx-10 mt-5  p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  md:p-6  rounded-xl '
        container.innerHTML=`
        <h1 class='font-bold'> ${value1} Taka is Donated for Famine-2024 at  Noakhali,Bangladesh </h1>
        <p>Donation made on: ${formattedDate}</p>  
        `
        document.getElementById('history-list').append(container)
        my_modal_1.showModal()
    }else{
        alert("invalid Donation Amount")
    }
   
})

// click button 2




document.getElementById('donate-btn2').addEventListener('click',function(){
        const value2 = getInputFieldId('collect-value2')
        if(value2 > 0 || !isNaN){
            const moneyReplace = parseFloat(document.getElementById('add-money-2').innerText);
    const newBalance = moneyReplace + value2
    document.getElementById('add-money-2').innerText = newBalance
     mainBalance = mainBalance -value2
     document.getElementById('mainBalance').innerText = mainBalance




    //  add history section here 

    const container = document.createElement('div')
    container.className = 'mx-10 mt-5  p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  md:p-6  rounded-xl '
    container.innerHTML=`
    <h1 class='font-bold'> ${value2} Taka is Donated for Famine-2024 at Feni,Bangladesh </h1>
    <p>Donation made on: ${formattedDate}</p>  
    `
    document.getElementById('history-list').append(container)
    my_modal_2.showModal()
    }else{
        alert("invalid Donation Amount")
    }
    
})
//  click button 3




document.getElementById('donate-btn3').addEventListener('click',function(){
        const value3 = getInputFieldId('collect-value3')
        if(value3 > 0 || !isNaN){
            const moneyReplace = parseFloat(document.getElementById('add-money-3').innerText);
        const newBalance = moneyReplace + value3
        document.getElementById('add-money-3').innerText = newBalance
        mainBalance = mainBalance - value3
        document.getElementById('mainBalance').innerText = mainBalance


        // add history 


        const container = document.createElement('div')
        container.className = 'mx-3 md:mx-10  mt-5  p-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)]  md:p-6  rounded-xl '
        container.innerHTML=`
        <h1 class='font-bold'> ${value3} Taka Famine 2024 is first for casualties in the fall </h1>
        <p>Donation made on: ${formattedDate}</p>  
        `
        document.getElementById('history-list').append(container)
        my_modal_3.showModal()
        }else{   
            alert("invalid Donation Amount")  
        }
        
   
})



// History section 



const historyTab = document.getElementById('history')
const donateTab = document.getElementById('donation')

    historyTab.addEventListener('click',function(){
    historyTab.classList.add('bg-btnclr',)


    // remove class

    donateTab.classList.remove('bg-btnclr')
    document.getElementById('indexContainer').classList.add('hidden')
    document.getElementById('history-list').classList.remove('hidden')

})
donateTab.addEventListener('click',function(){
    historyTab.classList.remove('bg-btnclr')


    // remove class



    donateTab.classList.add('bg-btnclr')
   document.getElementById('indexContainer').classList.remove('hidden')
   document.getElementById('history-list').classList.add('hidden')
})
