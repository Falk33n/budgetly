<script lang="ts">
	import { cn } from '$lib/utils/common';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		level?: 1 | 2 | 3 | 4 | 5 | 6;
	};

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: Props = $props();
</script>

<div
	role="heading"
	aria-level={level}
	bind:this={ref}
	class={cn('text-2xl leading-none font-semibold tracking-tight', className)}
	{...restProps}
>
	{@render children?.()}
</div>
