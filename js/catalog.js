// js/catalog.js

document.addEventListener('alpine:init', () => {
    Alpine.data('catalogLogic', () => ({
        searchQuery: '',
        selectedCategory: 'all',
        
        // Това е вашата "База данни". Лесно може да се добавя или премахва.
        items: [
            {
                id: 1,
                name: 'Обезмаслител Индустриален 5L',
                desc: 'Висококонцентриран обезмаслител за професионални кухни и ресторанти.',
                category: 'chemicals',
                categoryLabel: 'Химия',
                inStock: true
            },
            {
                id: 2,
                name: 'Тоалетна Хартия Jumbo (12 ролки)',
                desc: 'Двупластова целулоза за диспенсъри с висок трафик.',
                category: 'paper',
                categoryLabel: 'Хартия',
                inStock: true
            },
            {
                id: 3,
                name: 'Луксозен Течен Сапун 5L - Перла',
                desc: 'Нежен към кожата, подходящ за хотелски лобита и корпоративни офиси.',
                category: 'chemicals',
                categoryLabel: 'Химия',
                inStock: true
            },
            {
                id: 4,
                name: 'Сензорен Дозатор за Сапун (Inox)',
                desc: 'Автоматичен диспенсър от неръждаема стомана. Безконтактен.',
                category: 'dispensers',
                categoryLabel: 'Дозатори',
                inStock: false // Показва "По заявка"
            },
            {
                id: 5,
                name: 'Кърпи за ръце Z-сгъване (Кашон)',
                desc: 'Еднократни кърпи за ръце, 3000 къса в кашон. Бяла целулоза.',
                category: 'paper',
                categoryLabel: 'Хартия',
                inStock: true
            },
            {
                id: 6,
                name: 'Препарат за под със силен аромат 10L',
                desc: 'Дълготраен аромат на океан. Не оставя следи по теракот и гранитогрес.',
                category: 'chemicals',
                categoryLabel: 'Химия',
                inStock: false // Показва "По заявка"
            }
        ],

        // Компютърна функция, която филтрира продуктите в реално време
        get filteredItems() {
            return this.items.filter(item => {
                // Филтър по търсене
                const matchesSearch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                                      item.desc.toLowerCase().includes(this.searchQuery.toLowerCase());
                
                // Филтър по категория
                const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;

                return matchesSearch && matchesCategory;
            });
        }
    }));
});