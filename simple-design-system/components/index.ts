import SdsCalendar from "./Calendar/Calendar.vue";
import SdsCard from "./Card/Card.vue";
import SdsDropdown from "./Dropdown/Dropdown.vue";
import SdsExternalLink from "./ExternalLink/ExternalLink.vue";
import SdsLayoutSidebar from "./LayoutSidebar/LayoutSidebar.vue";
import SdsLayoutStacked from "./LayoutStacked/LayoutStacked.vue";
import SdsModal from "./Modal/Modal.vue";
import SdsNavbar from "./Navbar/Navbar.vue";

const Components: any = {
  SdsCalendar,
  SdsCard,
  SdsDropdown,
  SdsExternalLink,
  SdsLayoutSidebar,
  SdsLayoutStacked,
  SdsModal,
  SdsNavbar,
};

export default {
  install(Vue: any) {
    Object.keys(Components).forEach((name) => {
      Vue.component(name, Components[name]);
    });
  },
};
