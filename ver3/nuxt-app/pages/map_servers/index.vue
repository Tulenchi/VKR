<template>
  <div class="navbar bg-primary shadow-sm">
    <div class="navbar-start">
      <NuxtLink :to="{ name: 'index' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-primary-content">Карта серверов</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>
  <div class="min-h-[calc(100vh-4rem)] p-4">
    <div class="h-full w-full bg-neutral-50 rounded-box shadow-md ">
      <div id="network" class="h-[800px] w-full bg-neutral"></div>

      <!-- Модальное окно для деталей -->
      <div v-if="selectedNode" class="modal modal-open">
        <div class="modal-box max-w-5xl">
          <h3 class="font-bold text-lg">{{ selectedNode.label }}</h3>

          <!-- Детали сервера -->
          <div v-if="selectedNode.group === 'server' && selectedServer" class="py-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold">Основная информация</h4>
                <p><strong>Тип:</strong> {{ selectedServer.server_type }}</p>
                <p><strong>Описание:</strong> {{ selectedServer.description || 'нет' }}</p>
              </div>
              <div>
                <h4 class="font-semibold">Связанные элементы</h4>
                <p><strong>Кластер:</strong> {{ selectedServer.cluster_id?.cluster_name }}</p>
                <p><strong>Домен:</strong> <span v-if="selectedServer.domain_id?.length">
                    <span v-for="(domain, index) in selectedServer.domain_id" :key="domain.domain_id">
                      {{ domain.domain_name }}{{ index < selectedServer.domain_id.length - 1 ? ', ' : '' }}
                    </span>
                  </span>
                  <span v-else>нет</span>
                </p>
                <p><strong>Группа: </strong>
                  <span v-if="selectedServer.group_id.length <= 3">
                    <span v-for="(group, index) in selectedServer.group_id" :key="group.group_id">
                      {{ group.group_name }}{{ index < selectedServer.group_id.length - 1 ? ', ' : '' }}
                    </span>
                  </span>
                  <span v-else>
                    <span v-for="(group, index) in selectedServer.group_id.slice(0, 3)" :key="group.group_id">
                      {{ group.group_name }}{{ index < 2 ? ', ' : '' }}
                    </span> ... </span>
                </p>
              </div>
            </div>

            <div class="divider"></div>
            <div>
              <h4 class="font-semibold">Связанные системы</h4>
              <ul class="menu bg-base-100 rounded-box">
                <li v-for="system in systemsInServer" :key="system.system_id">
                  <a @click="selectNodeById(system.system_id)">{{ system.system_name }}</a>
                </li>
                <li v-if="systemsInServer.length === 0">
                  <a class="text-gray-500">Нет связанных систем</a>
                </li>
              </ul>
            </div>

            <div class="divider"></div>

            <div class="tabs">
              <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'ip' }" @click="activeTab = 'ip'">IP-адреса</a>
              <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'ports' }" @click="activeTab = 'ports'">Порты</a>
              <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'software' }" @click="activeTab = 'software'">ПО</a>
              <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'hardware' }" @click="activeTab = 'hardware'">Железо</a>
              <a class="tab tab-lifted" :class="{ 'tab-active': activeTab === 'domains' }" @click="activeTab = 'domains'">Домены</a>
            </div>

            <div v-if="activeTab === 'ip'" class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                <tr>
                  <th>IP</th>
                  <th>Версия</th>
                  <th>Тип</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ip in selectedServer.id_ip" :key="ip.id_ip">
                  <td>{{ ip.ip }}</td>
                  <td>{{ ip.version }}</td>
                  <td>{{ ip.id_type?.name }}</td>
                  <td>{{ ip.description || 'нет' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div v-if="activeTab === 'ports'" class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                <tr>
                  <th>Порт</th>
                  <th>Протокол</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="ip in selectedServer.id_ip" :key="ip.id_ip">
                  <td>{{ ip.id_port?.port }}</td>
                  <td>
                      <span v-for="(network, idx) in ip.id_port?.id_network" :key="network.id_network">
                        {{ network.network_type }}{{ idx < ip.id_port.id_network.length - 1 ? ', ' : '' }}
                      </span>
                  </td>
                  <td>{{ ip.id_port?.description || 'нет' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div v-if="activeTab === 'software'" class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                <tr>
                  <th>Название</th>
                  <th>Версия</th>
                  <th>Тип</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="softwarev in selectedServer.sversion_id" :key="softwarev.softwareversion_id">
                  <td>{{ softwarev.software_id.software_name }}</td>
                  <td>{{ softwarev.version_name }}</td>
                  <td>{{ softwarev.software_id.softwaretype_id. software_type_name }}</td>
                  <td>{{ softwarev.software_id.description || 'нет' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div v-if="activeTab === 'hardware'" class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                <tr>
                  <th>Компонент</th>
                  <th>Характеристики</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="hardware in selectedServer.hardware_id" :key="hardware.hardware_id">
                  <td>{{ hardware.hardware_name }}</td>
                  <td>
                    {{ hardware.value }}
                    <span v-if="hardware.type_id?.MU_id">
                        {{ hardware.type_id.MU_id[0]?.plural_name || '' }}
                      </span>
                  </td>
                  <td>{{ hardware.description || 'нет' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div v-if="activeTab === 'domains'" class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                <tr>
                  <th>Домен</th>
                  <th>DNS записи</th>
                  <th>Описание</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="domain in selectedServer.domain_id" :key="domain.domain_id">
                  <td>{{ domain.domain_name }}</td>
                  <td>
                    <div v-for="dns in domain.dnsr_id" :key="dns.dnsr_id" class="mb-1 last:mb-0">
                      <span class="font-semibold">{{ dns.type }}:</span> {{ dns.value }}
                    </div>
                  </td>
                  <td>{{ domain.description || 'нет' }}</td>
                </tr>
                </tbody>
              </table>
            </div>

          </div>

          <!-- Детали кластера -->
          <div v-else-if="selectedNode.group === 'cluster'" class="py-4">
            <h4 class="font-semibold">Серверы в кластере</h4>
            <ul class="menu bg-base-100 rounded-box">
              <li v-for="server in serversInCluster" :key="server.server_id">
                <a @click="selectNodeById(server.server_id)">{{ server.server_name }}</a>
              </li>
            </ul>
          </div>

          <!-- Детали системы -->
          <div v-else-if="selectedNode.group === 'system'" class="py-4">
            <h4 class="font-semibold">Информация о системе</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Тип системы:</strong> {{ selectedSystem?.systemtype_id?.type || 'не указан' }}</p>
                <p><strong>Описание:</strong> {{ selectedSystem?.description || 'нет' }}</p>
              </div>
              <div>
                <h4 class="font-semibold">Связанные серверы</h4>
                <ul class="menu bg-base-100 rounded-box">
                  <li v-for="server in serversInSystem" :key="server.server_id">
                    <a @click="selectNodeById(server.server_id)">{{ server.server_name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Детали группы -->
          <div v-else-if="selectedNode.group === 'group'" class="py-4">
            <h4 class="font-semibold">Информация о группе</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>Название:</strong> {{ selectedGroup?.group_name }}</p>
                <p><strong>Описание:</strong> {{ selectedGroup?.description || 'нет' }}</p>
              </div>
              <div>
                <h4 class="font-semibold">Связанные серверы</h4>
                <ul class="menu bg-base-100 rounded-box">
                  <li v-for="server in serversForGroup" :key="server.server_id">
                    <a @click="selectNodeById(server.server_id)">{{ server.server_name }}</a>
                  </li>
                </ul>
              </div>
              <div class="divider"></div>
              <div>
                <h4 class="font-semibold">Связанные системы</h4>
                <ul class="menu bg-base-100 rounded-box">
                  <li v-for="system in systemsInGroup" :key="system.system_id">
                    <a @click="selectNodeById(system.system_id)">{{ system.system_name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Детали домена -->
          <div v-else-if="selectedNode.group === 'domain'" class="py-4">
            <h4 class="font-semibold">Информация о домене</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p><strong>DNS записи:</strong></p>
                <ul class="list-disc pl-5">
                  <li v-for="dns in selectedDomain?.dnsr_id" :key="dns.dnsr_id">
                    {{ dns.type }}: {{ dns.value }}
                  </li>
                </ul>
                <p class="mt-2"><strong>Описание:</strong> {{ selectedDomain?.description || 'нет' }}</p>
              </div>
              <div>
                <h4 class="font-semibold">Связанные серверы</h4>
                <ul class="menu bg-base-100 rounded-box">
                  <li v-for="server in serversForDomain" :key="server.server_id">
                    <a @click="selectNodeById(server.server_id)">{{ server.server_name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Кнопки закрытия -->
          <div class="modal-action">
            <button class="btn bg-neutral" @click="closeModal">Закрыть</button>
            <NuxtLink
                v-if="selectedNode.group === 'server'"
                :to="{ name: 'information_server-id', params: { id: selectedNode.id } }"
                class="btn btn-primary"
            >
              Подробнее
            </NuxtLink>
            <NuxtLink
                v-if="selectedNode.group === 'system'"
                :to="{ name: 'information_system-id', params: { id: selectedNode.id } }"
                class="btn btn-primary"
            >
              Подробнее
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from 'vue';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import { useServerStore } from '@/stores/ServerStore';
import { useEscapeKey } from '@/composables/useEscapeKey';

const serverStore = useServerStore();
const loading = ref(true);
const selectedNode = ref<any>(null);
const activeTab = ref('ip');
const networkInstance = ref<any>(null);

useEscapeKey(() => {
  if (selectedNode.value) {
    closeModal();
  }
});

// Вычисляемые свойства
const selectedServer = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'server') return null;
  return serverStore.servers.find(s => s.server_id === selectedNode.value.id);
});

const selectedSystem = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'system') return null;
  return serverStore.servers.flatMap(s => s.system_id)
      .find(sys => sys?.system_id === selectedNode.value.id);
});

const selectedDomain = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'domain') return null;

  for (const server of serverStore.servers) {
    if (server.domain_id) {
      const foundDomain = Array.isArray(server.domain_id)
          ? server.domain_id.find(d => d.domain_id === selectedNode.value.id)
          : server.domain_id.domain_id === selectedNode.value.id ? server.domain_id : null;

      if (foundDomain) return foundDomain;
    }
  }
  return null;
});

const serversInCluster = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'cluster') return [];
  return serverStore.servers.filter(s =>
      s.cluster_id?.cluster_id === selectedNode.value.id
  );
});

const serversInSystem = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'system') return [];
  return serverStore.servers.filter(s =>
      s.system_id?.some(sys => sys.system_id === selectedNode.value.id)
  );
});

const serversForDomain = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'domain') return [];

  return serverStore.servers.filter(server => {
    if (!server.domain_id) return false;

    if (Array.isArray(server.domain_id)) {
      return server.domain_id.some(d => d.domain_id === selectedNode.value.id);
    } else {
      return server.domain_id.domain_id === selectedNode.value.id;
    }
  });
});

const selectedGroup = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'group') return null;
  return serverStore.servers.find(s =>
      s.group_id?.some(group => group.group_id === selectedNode.value.id)
  )?.group_id?.find(group => group.group_id === selectedNode.value.id);
});

const serversForGroup = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'group') return [];
  return serverStore.servers.filter(s =>
      s.group_id?.some(group => group.group_id === selectedNode.value.id)
  );
});

const systemsInServer = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'server') return [];
  return selectedServer.value?.system_id || [];
});

const systemsInGroup = computed(() => {
  if (!selectedNode.value || selectedNode.value.group !== 'group') return [];

  // Собираем все системы, которые принадлежат выбранной группе
  const systems = new Map<string, SystemName>();

  serverStore.servers.forEach(server => {
    server.system_id?.forEach(system => {
      if (system.group_id?.some(g => g.group_id === selectedNode.value.id) &&
          !systems.has(system.system_id)) {
        systems.set(system.system_id, system);
      }
    });
  });

  return Array.from(systems.values());
});

const isDarkTheme = ref(false);

// Функция для проверки текущей темы
const checkTheme = () => {
  isDarkTheme.value = document.documentElement.getAttribute('data-theme') === 'dark';
};

onMounted(async () => {
  checkTheme();

  // Наблюдаем за изменениями темы
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        checkTheme();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  await serverStore.fetchServers();
  loading.value = false;
  initNetwork();
});

watch(isDarkTheme, () => {
  if (networkInstance.value) {
    networkInstance.value.destroy();
    initNetwork();
  }
});

function getTextColorFromTheme() {
  const tempDiv = document.createElement('div');
  tempDiv.className = 'text-neutral-content';
  tempDiv.style.display = 'none';
  document.body.appendChild(tempDiv);

  const color = getComputedStyle(tempDiv).color;
  document.body.removeChild(tempDiv);

  return color;
}

const initNetwork = () => {
  if (!serverStore.servers || serverStore.servers.length === 0) return;

  const nodes = new DataSet<any>();
  const edges = new DataSet<any>();

  // Сначала создаем все группы
  const allGroups = new Map<string, Group>();
  serverStore.servers.forEach(server => {
    server.group_id?.forEach(group => {
      if (!allGroups.has(group.group_id)) {
        allGroups.set(group.group_id, group);
      }
    });
  });

  // Добавляем узлы для групп
  allGroups.forEach(group => {
    nodes.add({
      id: group.group_id,
      label: group.group_name,
      group: 'group',
      shape: 'ellipse',
      color: {
        background: '#6d798c',
        border: '#4b5361',
        highlight: {
          background: '#99a5ba',
          border: '#606875'
        }
      }
    });
  });

  // Для отслеживания систем и их групп
  const systemToGroups = new Map<string, Set<string>>();

  // Добавление серверов
  serverStore.servers.forEach(server => {
    nodes.add({
      id: server.server_id,
      label: server.server_name,
      group: 'server',
      shape: 'box',
      color: {
        background: '#5d8cde',
        border: '#2c5aab',
        highlight: {
          background: '#64B5F6',
          border: '#42A5F5'
        }
      }
    });

    // Связи сервера с группами
    server.group_id?.forEach(group => {
      edges.add({
        from: server.server_id,
        to: group.group_id,
        arrows: 'to',
        label: 'в группе',
        color: { color: '#757575' }
      });
    });

    // Связи сервера с кластером
    if (server.cluster_id) {
      if (!nodes.get(server.cluster_id.cluster_id)) {
        nodes.add({
          id: server.cluster_id.cluster_id,
          label: server.cluster_id.cluster_name,
          group: 'cluster',
          shape: 'diamond',
          color: {
            background: '#9DADC9',
            border: '#4a515e',
            highlight: {
              background: '#a1bff7',
              border: '#6a81ad'
            }
          }
        });
      }
      edges.add({
        from: server.server_id,
        to: server.cluster_id.cluster_id,
        arrows: 'to',
        label: 'входит в',
        color: { color: '#757575' }
      });
    }

    // Собираем информацию о связях систем с группами
    if (server.system_id && server.system_id.length > 0) {
      server.system_id.forEach(system => {
        if (!nodes.get(system.system_id)) {
          nodes.add({
            id: system.system_id,
            label: system.system_name,
            group: 'system',
            shape: 'box',
            color: {
              background: '#BB8D54',
              border: '#61492c',
              highlight: {
                background: '#FFB74D',
                border: '#FFA726'
              }
            }
          });
        }

        // Собираем группы системы
        system.group_id?.forEach(group => {
          if (allGroups.has(group.group_id)) {
            if (!systemToGroups.has(system.system_id)) {
              systemToGroups.set(system.system_id, new Set());
            }
            systemToGroups.get(system.system_id).add(group.group_id);
          }
        });

        // Связь сервер-система
        edges.add({
          from: server.server_id,
          to: system.system_id,
          arrows: 'to',
          label: 'использует',
          color: { color: '#607D8B' }
        });
      });
    }

    // Связи сервера с доменом
    if (server.domain_id) {
      const domains = Array.isArray(server.domain_id) ? server.domain_id : [server.domain_id];

      domains.forEach(domain => {
        if (!nodes.get(domain.domain_id)) {
          nodes.add({
            id: domain.domain_id,
            label: domain.domain_name,
            group: 'domain',
            shape: 'ellipse',
            color: {
              background: '#5674a8',
              border: '#3b4f73',
              highlight: {
                background: '#7996c7',
                border: '#465775'
              }
            }
          });
        }
        edges.add({
          from: server.server_id,
          to: domain.domain_id,
          arrows: 'to',
          label: 'домен',
          color: { color: '#795548' }
        });
      });
    }
  });

  // Добавляем ребра системы-группы один раз
  systemToGroups.forEach((groups, systemId) => {
    groups.forEach(groupId => {
      edges.add({
        from: systemId,
        to: groupId,
        arrows: 'to',
        label: 'в группе',
        color: { color: '#607D8B' }
      });
    });
  });

  const textColor = isDarkTheme.value ? '#C3C3C3' : '#000000';

  // Конфигурация сети
  const options = {
    layout: {
      improvedLayout: true,
      randomSeed: 42, // Фиксированное значение для стабильности
      hierarchical: {
        enabled: false // Отключаем иерархическое расположение
      }
    },
    physics: {
      enabled: true,
      solver: 'forceAtlas2Based', // Более эффективный алгоритм
      forceAtlas2Based: {
        gravitationalConstant: -110,
        centralGravity: 0.01,
        springLength: 200,
        springConstant: 0.05,
        damping: 0.3,
        avoidOverlap: 1 // Увеличено для лучшего разделения
      },
      stabilization: {
        enabled: true,
        iterations: 2000,
        updateInterval: 25
      }
    },
    nodes: {
      font: {
        size: 14,
        color: textColor
      },
      borderWidth: 1,
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.3)',
        size: 10,
        x: 5,
        y: 5
      },
      size: 30, // Фиксированный размер узлов
      margin: 15, // Отступ вокруг узлов
      widthConstraint: {
        maximum: 255 // Максимальная ширина текста
      }
    },
    edges: {
      width: 1,
      smooth: {
        type: 'continuous',
        roundness: 0.5
      },
      font: {
        strokeWidth: 0, // Это убирает контур вокруг текста
        color: textColor, // Используем тот же цвет, что и для узлов
        size: 12, // Размер шрифта
        align: 'middle' // Выравнивание
      },
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.6,
          type: 'arrow'
        }
      },
      selectionWidth: 2,
      color: {
        inherit: 'from',
        opacity: 0.8
      },
      hoverWidth: 1.5
    },
    interaction: {
      dragNodes: false,
      dragView: true,        // Разрешает перемещение всей сети (панорамирование)
      hideEdgesOnDrag: false, // Не скрывать рёбра при перетаскивании
      hideNodesOnDrag: false, // Не скрывать узлы при перетаскивании
      tooltipDelay: 200,
      multiselect: false,
      hover: true,           // Включает эффекты при наведении
      keyboard: {            // Настройки клавиатуры
        enabled: true,       // Включить управление с клавиатуры
        speed: {             // Скорость перемещения/зума
          x: 10,             // По горизонтали (влево/вправо)
          y: 10,             // По вертикали (вверх/вниз)
          zoom: 0.04         // Скорость увеличения/уменьшения
        },
        bindToWindow: true   // Привязка к окну (реагирует, даже если сеть не в фокусе)
      },

    }
  };

  // Создаем сеть
  const container = document.getElementById('network');
  if (container) {
    if (networkInstance.value) {
      networkInstance.value.destroy();
    }

    networkInstance.value = new Network(container, { nodes, edges }, options);

    // Стабилизация сети перед отображением
    networkInstance.value.once('stabilizationIterationsDone', () => {
      networkInstance.value.fit({
        nodes: nodes.getIds(),
        animation: {
          duration: 1000,
          easingFunction: 'easeInOutQuad'
        },
        padding: 100           // Отступ от краев (в пикселях)
      });
    });

    // Обработчик клика по узлу
    networkInstance.value.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        selectedNode.value = nodes.get(nodeId);
        activeTab.value = 'ip'; // Сбрасываем активную вкладку при выборе нового узла
      }
    });

    // Обработчик клика по пустому месту
    networkInstance.value.on('click', (params: any) => {
      if (params.nodes.length === 0) {
        closeModal();
      }
    });
  }
};

// Функция для программного выбора узла
const selectNodeById = (id: string) => {
  selectedNode.value = networkInstance.value.body.data.nodes.get(id);
  networkInstance.value.focus(id, {
    scale: 0.8,
    animation: true
  });
};

// Закрытие модального окна
const closeModal = () => {
  selectedNode.value = null;
  if (networkInstance.value) {
    networkInstance.value.fit({
      animation: {
        duration: 1000,
        easingFunction: 'easeInOutQuad'
      }
    });
  }
};

useSeoMeta({
  title: 'Карта серверов',
  ogTitle: 'Карта серверов',
  description: 'Карта показывающая связи серверов',
  ogDescription: 'Карта показывающая связи серверов'
})

</script>

<style scoped>
.modal-box {
  max-height: 80vh;
  overflow-y: auto;
}

.tab {
  cursor: pointer;
}

.network-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  pointer-events: none;
  z-index: 100;
}

</style>