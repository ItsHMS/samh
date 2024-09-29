<template>
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h5 class="text-lg font-semibold mb-4">
              {{ $t('header.logo') }}<span class="text-orange-500">✈</span>{{ $t('header.flight') }}
            </h5>
          </div>
          <div>
            <h5 class="font-semibold mb-2">{{ $t('footer.about') }}</h5>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.aboutGooseFlight') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.howItWorks') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.blog') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.forum') }}</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-2">{{ $t('footer.support') }}</h5>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.helpCenter') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.contactUs') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.privacyPolicy') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.termsOfService') }}</a></li>
            </ul>
          </div>
          <div>
            <h5 class="font-semibold mb-2">{{ $t('footer.getApp') }}</h5>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.androidApp') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.iosApp') }}</a></li>
              <li><a href="#" class="hover:text-gray-300">{{ $t('footer.mobileSite') }}</a></li>
              <li class="flex space-x-2 mt-2">
                <a href="#"><img src="https://picsum.photos/120/40" alt="App Store" class="h-10" /></a>
                <a href="#"><img src="https://picsum.photos/120/40" alt="Google Play" class="h-10" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>