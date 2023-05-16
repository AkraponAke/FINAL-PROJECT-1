import Nav from "../components/nav";
import Bottom from "../components/Bottom";
import Head from "next/head";
import Promo from "../components/Promo";
import Menu from "../components/Menu";
import FilterButton from "../components/FilterButton";
import Search from "../components/Search";

function Home() {
  let haircutMenu = [
    {
      name: 'Regular ',
      price: '600 ฿',
    },
    {
      name: 'Student*',
      price: '350 ฿',
    }
  ]
  let colorMenu = [
    {
      name: 'Coloring',
      price: '1,500 ฿',
    },
    {
      name: 'Maxlight deluxe',
      price: '2,500 ฿',
    },
    {
      name: 'Bleaching 1st',
      price: '1,000 ฿',
    },
    {
      name: 'Bleaching 2nd',
      price: '800 ฿',
    },
    {
      name: 'Bleaching 3rd' ,
      price: '800 ฿',
    },
    {
      name: 'Bleaching 4th',
      price: '800 ฿',
    },
    {
      name: 'Half head Highlight',
      price: '800 ฿',
    },
    {
      name: 'Full head Highlight',
      price: '800 ฿',
    }
  ]
  let texturingMenu = [
    {
      name: 'Cold Perm',
      price: '1,200 ฿',
    },
    {
      name: 'Down Perm',
      price: '1,200 ฿',
    },
    {
      name: 'Cold+down Perm',
      price: '2,000 ฿',
    },
    {
      name: 'Stretch',
      price: '1,800 ฿',
    },
    {
      name: 'Brazilian Blowout' ,
      price: '3,000 ฿',
    },
    {
      name: 'Keratin Therapy',
      price: '2,300 ฿',
    }
  ]
  let treatmentMenu = [
    {
      name: 'Olaplex',
      price: '1,500 ฿',
    },
    {
      name: 'Anti Hairfall Treatment',
      price: '1,299 ฿฿',
    },
    {
      name: 'Weak and Thin Hair ',
      price: '1,299 ฿',
    },
    {
      name: 'Detox',
      price: '699 ฿',
    }
  ]
  let stylingtMenu = [
    {
      name: 'Shampoo Blow-Dry ',
      price: '150+ ฿',
    },
    {
      name: 'Styling',
      price: '800-1,500+ ฿',
    }
  ]
  let productMenu = [
    {
      name: 'Ash Shampoo',
      price: '490 ฿',
    },
    {
      name: 'Smoky Ash Shampoo',
      price: '490 ฿',
    },
    {
      name: 'Blond Shampoo',
      price: '490 ฿',
    },
    {
      name: 'Blue Shampoo',
      price: '490 ฿',
    },
    {
      name: 'Pink Shampoo' ,
      price: '490 ฿',
    },
    {
      name: 'Purple Shampoo',
      price: '490 ฿',
    },
    {
      name: 'Wella Serum 200ml',
      price: '400 ฿',
    },
    {
      name: 'Wella Serum 400ml',
      price: '800 ฿',
    },
    {
      name: 'Keraplex' ,
      price: '290 ฿',
    }
  ]


  return (
    <div>
      <Head></Head>
      <Nav />
      <Promo />
      <dav className="menu-frame">
        <dav className="searchFilter">
          <Search />
          <dav className="Filter">
            <FilterButton title="HAIR CUT"/>
            <FilterButton title="COLORS"/>
            <FilterButton title="TEXTURING"/>
          </dav>
          <dav className="Filter">
            <FilterButton title="TREATMENT"/>
            <FilterButton title="STYLING"/>
            <FilterButton title="PRODUCT"/>
          </dav>
        </dav>
        <Menu title="HAIR CUT" listMenu={haircutMenu}/>
        <Menu title="COLORS" listMenu={colorMenu} img="/img/color.svg"/>
        <Menu title="TEXTURING" listMenu={texturingMenu} img="/img/texturing.svg"/>
        <Menu title="TREATMENT" listMenu={treatmentMenu} img="/img/treatment.svg"/>
        <Menu title="STYLING" listMenu={stylingtMenu} img="/img/styling.svg"/>
        <Menu title="PRODUCT" listMenu={productMenu} img="/img/Product.svg"/>
      </dav>
      <Bottom activeMenu="S" />
    </div>
  );
}
export default Home;
