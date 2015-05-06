function langEN()
{
  trackAction("langEN");
  $.i18n.setLng("en", function(t) { $(document).i18n(); });
}

function langDE()
{
  trackAction("langDE");
  $.i18n.setLng("de", function(t) { $(document).i18n(); });
}

function langNL()
{
  trackAction("langNL");
  $.i18n.setLng("nl", function(t) { $(document).i18n(); });
}

function mytrans(key) {
    if (typeof($.t) === typeof(Function)) {
        return $.t(key);
    } else {
        return key;
    }
}
