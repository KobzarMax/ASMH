// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownWrapperParent = dropDownWrapper.parentElement;
	const dropDownWrapperUpperParent = dropDownWrapperParent.parentElement;
	const dropChevron = dropDownWrapperUpperParent.querySelector(".fa-chevron-down");

	// Клик по кнопке. Открыть/Закрыть select
	dropDownBtn.addEventListener('click', function (e) {
		dropDownList.classList.toggle('dropdown__list--visible');
        this.classList.add('dropdown__button--active');
		dropDownListItems.forEach((dropDownListItem) => {
			if (dropDownListItem.value = dropDownBtn.value) {
				dropDownListItem.classList.add("chousen");
			} else {
				return false;
			}
		})
	});





	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.dataset.value;
			dropDownBtn.focus();
			dropDownList.classList.remove('dropdown__list--visible');
		});
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
			dropDownBtn.classList.remove('dropdown__button--active');
			dropDownList.classList.remove('dropdown__list--visible');
		}
	});

	if(dropChevron) {
		dropChevron.addEventListener('click', function () {
			dropDownList.classList.toggle('dropdown__list--visible');
			dropDownBtn.classList.add('dropdown__button--active');
			dropDownListItems.forEach((dropDownListItem) => {
				if (dropDownListItem.value = dropDownBtn.value) {
					dropDownListItem.classList.add("chousen");
				} else {
					return false;
				}
			})
		});
	}	

	
});
