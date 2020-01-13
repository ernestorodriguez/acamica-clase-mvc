    var Subject = function() {
        this.observers = [];
    };

    // Añade observer
    Subject.prototype.addObserver = function(observer) {
        this.observers.push(observer);
    };

    // Remove observer 
    Subject.prototype.removeObserver = function(observer) {
        const removeIndex = this.observers.findIndex(obs => {
            return observer === obs;
        });

        if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
        }
    }

    // notifica a los observers
    Subject.prototype.notify = function(data) {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.update(data));
        }
    }