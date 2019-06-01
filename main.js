// classes
// functions
// commands and global variables

// classes

class Clicker
{
	constructor()
	{
		this.level = 1
		this.price = 10;

		this.level_display = document.getElementById("clicker_level");
		this.price_display = document.getElementById("clicker_price");
		this.productivity_display = document.getElementById("clicker_productivity");

		this.renew_display();
	}

	click()
	{
		Books += this.get_production_value();
		Books_produced += this.get_production_value();
		renew_Books();
		
	}

	get_production_value()
	{
		return Math.floor(1 + (0.05 * altogether_productivity * (this.level - 1)) + (this.level - 1));
	}

	improve()
	{
		if(Books >= this.price)
		{
			Books -= round(this.price);
			this.level += 1;
			this.price *= 1.5;
			this.renew_display();
		}
		else
		{
			alert("Not enough Books!");
		}
	}

	renew_display()
	{
		this.level_display.innerHTML = this.level;
		this.price_display.innerHTML = this.price;
		this.productivity_display.innerHTML = this.get_production_value();
	}
}

class Building
{
	constructor(name, productivity, price)
	{
		this.name = name;
		this.level = 0;
		this.price = price;
		this.productivity = productivity;

		// variables for displaying
		// definition of areas
		this.area = document.createElement("span");
		this.area.id = name;

		this.level_display = document.createElement("span");
		this.level_display.id = this.name + "_level";

		this.productivity_display = document.createElement("span");
		this.productivity_display.id = this.name + "_productivity";

		this.price_display = document.createElement("span");
		this.price_display.id = this.name + "_price";

		this.button = document.createElement("button");
		this.button.innerHTML = "Improve";
	        this.button.onclick = this.improve.bind(this);

		// put together
		this.area.append(document.createTextNode(name + " Level: "));
		this.area.append(this.level_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Books per Day: "));
		this.area.append(this.productivity_display);
		this.area.append(document.createElement("br"));

		this.area.append(document.createTextNode("Improvement Price: "));
		this.area.append(this.price_display);
		this.area.append(document.createElement("br"));

		this.area.append(this.button);
		this.area.append(document.createElement("br"));
		this.area.append(document.createElement("br"));
        
        	setInterval(this.produce.bind(this), 1000);
	}
	
	get_price() 
	{
		return (this.price / 2) * (this.level * this.level + 1) + (this.price / 2) * (this.level + 1)
	}
	
	improve()
	{
        	if(Books >= this.get_price())
        	{
        		Books -= this.get_price();
        		this.level += 1;
        		altogether_productivity += this.productivity;
        		this.renew_display();
        		clicker.renew_display();
        	}
        	else
        	{
			alert("Not enough Books!");
		}
	}

	renew_display()
	{
		this.level_display.innerHTML = this.level;
		this.productivity_display.innerHTML = this.get_production_value();
		this.price_display.innerHTML = this.get_price();
	}

se
	set_visible()
	{
		buildings.append(this.area);
		this.renew_display();
	}

	produce()
	{
		Books += this.get_production_value();
		Books_produced += this.get_production_value();
	}
	
	get_production_value()
	{
		return this.level * this.productivity;
	}
}

// functions

function renew_Books()
{
	Books_display.innerHTML = Books;
	Books_produced_display.innerHTML = Books_produced;
    
	if(this.Books_produced >= 100 && bakery_enabled == 0) 
	{
		bakery.set_visible();
		bakery_enabled = 1;
        
	}
	if(this.Books_produced >= 1000 && factory_enabled == 0)
	{
		factory.set_visible(); 
		factory_enabled = 1;
	}
	if(this.Books_produced >= 10000 && Book_tesla_enabled == 0)
	{
		Book_tesla.set_visible();
		Book_tesla_enabled = 1;
	}

	if(this.Books_produced >= 100000 && Book_gigant_enabled == 0) 
	{
		Book_gigant.set_visible(); 
		Book_gigant_enabled = 1;
	}
}


// commands and (global) variables

var Books = 0;
var Books_produced = 0;
var altogether_productivity = 0; // counts productivity of buildings except clicker

var Books_display = document.getElementById("Books");
var Books_produced_display = document.getElementById("Books_produced");

var buildings = document.getElementById("buildings");

bakery_enabled = 0;
factory_enabled = 0;
Book_tesla_enabled = 0;
Book_gigant_enabled = 0;

clicker = new Clicker();
baker = new Building("Author", 1, 10);
baker.set_visible();
bakery = new Building("Book Club", 10, 100);
factory = new Building("Book Factory", 100, 1000);
Book_tesla = new Building("Book Tesla", 1000, 10000);
Book_gigant = new Building("Book Gigant", 10000, 100000);

setInterval(renew_Books, 500);
