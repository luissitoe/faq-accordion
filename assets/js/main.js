const accordion = document.querySelectorAll(".accordion"),
  accordionToggle = document.querySelectorAll(".accordion__header"),
  accordionContent = document.querySelectorAll(".accordion__content"),
  accordionIcon = document.querySelectorAll("#accordion-icon");

for (let i = 0; i < accordionToggle.length; i++) {
  accordionToggle[i].addEventListener("click", () => {
    if (
      parseInt(accordionContent[i].style.height) !=
      accordionContent[i].scrollHeight
    ) {
      accordionContent[i].style.height =
        accordionContent[i].scrollHeight + "px";
      accordionIcon[i].classList.replace("ri-add-line", "ri-subtract-fill");
    } else {
      accordionContent[i].style.height = "0px";
      accordionIcon[i].classList.replace("ri-subtract-fill", "ri-add-line");
    }

    for (let j = 0; j < accordionContent.length; j++) {
      if (j !== i) {
        accordionContent[j].style.height = "0px";
        accordionIcon[j].classList.replace("ri-subtract-fill", "ri-add-line");
      }
    }
  });
}
