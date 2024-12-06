import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Prevent auto CSS addition (we'll use Tailwind for styles)
config.autoAddCss = false;

// Add the specific icon to the library
library.add(faMagnifyingGlass);