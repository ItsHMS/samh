<template>
    <section class="bg-white rounded-lg shadow-md p-6 mb-12">
      <div class="flex space-x-4 mb-4">
        <label class="flex items-center">
          <input type="radio" name="trip-type" class="mr-2" />
          {{ $t('search.oneWay') }}
        </label>
        <label class="flex items-center">
          <input type="radio" name="trip-type" class="mr-2" checked />
          {{ $t('search.roundTrip') }}
        </label>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('search.from') }}</label>
          <input type="text" :placeholder="$t('search.from') + '?'" class="w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('search.to') }}</label>
          <input type="text" :placeholder="$t('search.to') + '?'" class="w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('search.depart') }}</label>
          <input type="text" placeholder="DD/MM/YYYY" class="w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('search.return') }}</label>
          <input type="text" placeholder="DD/MM/YYYY" class="w-full border rounded-md p-2" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('search.cabinClass') }}</label>
          <select class="w-full border rounded-md p-2">
            <option>1 adult, Economy</option>
          </select>
        </div>
      </div>
      <button class="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
        {{ $t('search.search') }}
      </button>
    </section>
  </template>