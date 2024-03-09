document.addEventListener('DOMContentLoaded',()=>{
    let count =1;
    const addButton = document.getElementById("add-form-btn");
    const formsContainer = document.getElementById("forms-container");

    function addRemoveButton(formGroup,index){
        const removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = "Remove this form";
        removeButton.className = "remove-form-btn";
        removeButton.onclick = function(){
            formGroup.remove();
            console.log(formGroup);
        };
        formGroup.appendChild(removeButton);
    }

    addButton.addEventListener('click',function(){
        const formGroup = document.createElement('div');
        formGroup.classList.add("form-group");
        formGroup.setAttribute('id',`form-group-${count}`);
        formGroup.innerHTML = `
        <label for="field_one_${count}">Field ${count}</label>
        <input type="text" id="field_one_${count}" name=field_${count}" />
        <label for="field_two_${count}">Field ${count}</label>
        <input type="text" id="field_two_${count}" name="field_${count}" />
        `;
        formsContainer.appendChild(formGroup);
        addRemoveButton(formGroup,count)
        count++;
    })
});

document.getElementById("submit-btn").addEventListener('click',(e)=>{
    e.preventDefault();
    const allInputs = document.querySelectorAll('input[type="text"]');
    const formData = Array.from(allInputs).map((input)=>({
        name:input.name,
        value:input.value
    }));
    //console.log(formData);
    console.log("=============================================");
    for(var i=0;i<formData.length;i++){
        console.log(formData[i].name);
        console.log(formData[i].value);
    }
    console.log("=============================================");
    console.log(formData);
})