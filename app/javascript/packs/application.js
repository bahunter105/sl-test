// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '../stylesheets/application.scss'
import { setBasePath, SlAlert, SlAnimation, SlButton, ... } from '@shoelace-style/shoelace'

// ...

const rootUrl = document.currentScript.src.replace(/\/packs.*$/, '')

// Path to the assets folder (should be independent from the current script source path
// to work correctly in different environments)
setBasePath(rootUrl + '/packs/js/')

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import '../stylesheets/application.scss'
import { defineCustomElements, setAssetPath } from '@shoelace-style/shoelace'

setAssetPath(document.currentScript.src)

// This will import all shoelace web components for convenience.
// Check out the webpack documentation below on selective imports.
// https://shoelace.style/getting-started/installation?id=using-webpack
defineCustomElements()
