/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
async function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

//Select Statements
let errorPara = document.querySelector("#error");
let uList = document.querySelector("#list");

//let promise = getList()//returns a promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
function handleList(list) {
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    uList.appendChild(li);
  });
}
// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
function handleError(err) {
  console.error(err);
  errorPara.textContent = err.message;
}

// TODO: Handle the resolved or rejected states of the promise
//promise.then(handleList).catch(handleError);

async function updateDOMList() {
  try {
    let list = await getList();
    list.forEach((hobbit) => {
      let li = document.createElement("li");
      li.textContent = hobbit;
      uList.appendChild(li);
    });
  } catch (err) {
  console.error(err);
  errorPara.textContent = err.message; 
  }
}

updateDOMList();