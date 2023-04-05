export const enums = {
    "RecurrentType": {
        "0": {"enum": "UNDEFINED", "ru":  "Без повторения"},
        "1": {"enum": "DAILY", "ru":  "Ежедневно"},
        "2": {"enum": "WEEKLY", "ru":  "Еженедельно"},
        "3": {"enum": "MONTHLY", "ru":  "Ежемесячно"},
        "4": {"enum": "ANNUALLY", "ru":  "Ежегодно"}
    },
    "RecommendType": {
        "0": {"enum": "UNDEFINED", "ru":  "Не установлен"},
        "1": {"enum": "RECOMMEND", "ru":  "ИИР"},
        "2": {"enum": "SIGNAL", "ru":  "Сигнал"}
    },
    "RecommendSource": {
        "0": {"enum": "UNDEFINED", "ru":  "Не установлен"},
        "1": {"enum": "MANUAL", "ru":  "Ручная"},
        "2": {"enum": "STRATEGY", "ru":  "Стратегия"}
    },
    "RecommendStatus": {
        "0": {"enum": "UNDEFINED", "ru": "Черновик"},
        "1": {"enum": "REVIEW", "ru":  "На модерации"},
        "2": {"enum": "ACTIVE", "ru":  "Активна", "color_font": "#7DC579", "color_bg": "#E1FFDF"},
        "3": {"enum": "DONE", "ru":  "Исполнена", "color_font": "#0CCE82", "color_bg": "#DFF7EF"},
        "4": {"enum": "CANCELED", "ru":  "Отменена", "color_font": "#FF8181", "color_bg": "#FFE9E9"},
        "5": {"enum": "EXPIRED", "ru":  "Просрочена", "color_font": "#FF8181", "color_bg": "#FFE9E9"},
        "6": {"enum": "EXECUTION", "ru":  "Исполняется", "color_font": "#FFC960", "color_bg": "#FFF1DB"}
    },
    "Risk": {
        "0": {"enum": "UNDEFINED", "ru": "Не определен"},
        "1": {"enum": "CONSERVATIVE", "ru":  "Консервативный"},
        "2": {"enum": "MODERATE", "ru":  "Умеренный"},
        "3": {"enum": "AGGRESSIVE", "ru":  "Агрессивный"}
    },
    "TransactionType": {
        "0": {"enum": "UNDEFINED", "ru": "Не определен"},
        "1": {"enum": "BUY", "ru":  "Покупка", "color_font": "#0CCE82", "color_bg": "#DFF7EF"},
        "2": {"enum": "SELL", "ru":  "Продажа", "color_font": "#4750FF", "color_bg": "#EBEFFF"},
        "3": {"enum": "INPUT", "ru":  "Пополнение"},
        "4": {"enum": "OUTPUT", "ru":  "Вывод"},
        "5": {"enum": "TAX", "ru":  "Налог"},
        "6": {"enum": "FEE", "ru":  "Комиссия"},
        "7": {"enum": "COUPON", "ru":  "Купон"},
        "8": {"enum": "DIVIDEND", "ru":  "Дивиденд"}
    },
    "InstrumentType": {
        "0": {"enum": "UNDEFINED", "ru": "Не определен"},
        "1": {"enum": "SHARE", "ru":  "Акция"},
        "2": {"enum": "BOND", "ru":  "Облигация"},
        "3": {"enum": "ETF", "ru":  "Фонд"},
        "4": {"enum": "CURRENCY", "ru":  "Валюта"},
        "5": {"enum": "FUTURE", "ru":  "Фьючерс"}
    },
    "StrategyStatus": {
        "0": {"enum": "UNDEFINED", "ru": "Не определен"},
        "1": {"enum": "DRAFT", "ru":  "Черновик"},
        "2": {"enum": "REVIEW", "ru":  "На модерации"},
        "3": {"enum": "PUBLIC", "ru":  "Опубликована"},
        "4": {"enum": "ARCHIVE", "ru":  "В архиве"}
    },
    "Direction": {
        "0": {"enum": "UNDEFINED", "ru":  "Не установлен"},
        "1": {"enum": "BUY", "ru":  "Покупка", "color_font": "#0CCE82", "color_bg": "#DFF7EF"},
        "2": {"enum": "SELL", "ru":  "Продажа", "color_font": "#4750FF", "color_bg": "#EBEFFF"}
    },
    "PortfolioType": {
        "0": {"enum": "UNDEFINED", "ru": "Не установлен"},
        "1": {"enum": "MANUAL", "ru": "Ручной"},
        "2": {"enum": "CALCULATED", "ru": "Из сделок"},
        "3": {"enum": "API", "ru": "Из API"}
    },
    "Broker": {
        "0": {"enum": "OTHER", "ru": "Другой"},
        "1": {"enum": "TINKOFF", "ru": "Тинькофф"},
        "2": {"enum": "ALOR", "ru": "Алор"},
        "3": {"enum": "TINKOFF-SANDBOX", "ru": "Песочница Тинькофф"},
        "4": {"enum": "ALOR-SANDBOX", "ru": "Песочница Алор"}
    },
    "OrderType": {
        "0": {"enum": "UNDEFINED", "ru":  "Не установлен"},
        "1": {"enum": "LIMIT", "ru":  "Лимитная"},
        "2": {"enum": "MARKET", "ru":  "Рыночная"}
    },
    "OrderStatus": {
        "0": {"enum": "UNDEFINED", "ru": "Не определен"},
        "1": {"enum": "NEW", "ru": "Новый", "color_font": "#4750FF", "color_bg": "#EBEFFF"},
        "2": {"enum": "SENT", "ru": "Отправлен", "color_font": "#4750FF", "color_bg": "#EBEFFF"},
        "3": {"enum": "PENDING", "ru": "Исполняется", "color_font": "#FFC960", "color_bg": "#FFF1DB"},
        "4": {"enum": "COMPLETED", "ru": "Исполнен", "color_font": "#0CCE82", "color_bg": "#DFF7EF"},
        "5": {"enum": "REJECTED", "ru": "Отказан", "color_font": "#FF8181", "color_bg": "#FFE9E9"},
        "6": {"enum": "CANCELED", "ru": "Отменен", "color_font": "#FF8181", "color_bg": "#FFE9E9"},
        "7": {"enum": "ERROR", "ru": "Ошибка", "color_font": "#FF8181", "color_bg": "#FFE9E9"}
    }
}
export const currency = {
    "rub": {"ru": "Рубль", "symbol": "₽"},
    "usd": {"ru": "Американский доллар", "symbol": "$"}
}