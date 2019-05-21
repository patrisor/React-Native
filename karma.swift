let phone = mymobileNO.titleLabel.text
let phoneUrl = URL(string: "telprompt://\(phone)"
let phoneFallbackUrl = URL(string: "tel://\(phone)"
if(phoneUrl != nil && UIApplication.shared.canOpenUrl(phoneUrl!)) {
  UIApplication.shared.open(phoneUrl!, options:[String:Any]()) { (success) in
    if(!success) {
      // Show an error message: Failed opening the url
    }
  }
} else if(phoneFallbackUrl != nil && UIApplication.shared.canOpenUrl(phoneFallbackUrl!)) {
  UIApplication.shared.open(phoneFallbackUrl!, options:[String:Any]()) { (success) in
    if(!success) {
      // Show an error message: Failed opening the url
    }
  }
} else {
    // Show an error message: Your device can not do phone calls.
}
